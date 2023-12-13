const express = require('express');
const app = express();
const mysql = require('mysql2');
const session = require('express-session');
const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'phpmyadmin',
  password: 'aluno',
  database: 'CCWAmedicine',
});

db.connect((err) => {
  if (err) {
    console.log('Erro ao conectar ao banco de dados: ' + err);
  } else {
    console.log('Conectado ao banco de dados MySQL');
  }
});


const USER_TYPES = {
  ADMIN: 'admin',
  DOCTOR: 'medico',
  USER: 'user',
};


const checkUserTypeMiddleware = (allowedUserTypes) => {
  return (req, res, next) => {
    if (req.session.loggedin) {
      const userType = req.session.type;

      if (allowedUserTypes.includes(userType)) {
        // Usuário tem um tipo válido, permitir o acesso à rota
        return next();
      }
    }

    // Usuário não tem uma sessão válida ou o tipo de usuário é inválido
    res.redirect('acessorestrito');
  };
};




const isAuthenticated = (req, res, next) => {
  if (req.session && req.session.isAuthenticated) {
    return next();
  } else {
    res.redirect('/login'); // Redireciona para a página de login se não estiver autenticado
  }
};


// Rota para redirecionar para a página 'index' quando acessado o localhost:3000
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
});

app.get('/medicoPage', checkUserTypeMiddleware([USER_TYPES.DOCTOR]), (req, res) => {
    db.query('SELECT * FROM consultas', (err, result) => {
      if (err) throw err;
      res.render('medicoPage', { consultas: result, req: req });
    });
  });

  app.get('/adminPage', checkUserTypeMiddleware([USER_TYPES.ADMIN]), (req, res) => {
    // Consultas
    db.query('SELECT * FROM consultas', (errConsultas, resultConsultas) => {
        if (errConsultas) throw errConsultas;

        // Cadastro
        db.query('SELECT * FROM cadastro', (errCadastro, resultCadastro) => {
            if (errCadastro) throw errCadastro;

            // Renderiza a página 'adminPage' com os resultados das consultas e do cadastro
            res.render('adminPage', { consultas: resultConsultas, cadastro: resultCadastro, req:req });
        });
    });
});

  app.get('/consultas', (req, res) => {
  res.render('consultas'); 
});;
  
app.get('/consultas', (req, res) => {
    res.render('consultas'); 
  });

  app.get('/Produtos', (req, res) => {
    res.render('Produtos'); 
  });

  app.get('/doacoes', (req, res) => {
    res.render('doacoes'); 
  });

  app.get('/Planos', (req, res) => {
    res.render('planos'); 
  });

  app.get('/testes', (req, res) => {
    res.render('testes'); 
  });

  app.get('/sobrenoslogado', (req, res) => {
    res.render('sobrenoslogado'); 
  });

  app.get('/about', (req, res) => {
    res.render('about'); 
  });

  app.get('/sociels', (req, res) => {
    res.render('sociels'); 
  });

  app.get('/sociaislogado', (req, res) => {
    res.render('sociaislogado'); 
  });

  app.get('/fazer', (req, res) => {
    res.render('fazer'); 
  });



app.post('/consultas', (req, res) => {
  const { nome_paciente, data_consulta, hora_consulta, especialista, criado_em } = req.body;
  
  if (!nome_paciente) {
    res.status(400).send('O campo nome_paciente não pode ser nulo ou vazio');
    return;
  }

  const cadastroQuery = 'INSERT INTO consultas (nome_paciente, data_consulta, hora_consulta, especialista, criado_em) VALUES (?, ?, ?, ?, ?)';
  
db.query(cadastroQuery, [nome_paciente, data_consulta, hora_consulta, especialista, criado_em], (err, result) => {
  if (err) {
    console.error('Erro ao cadastrar consulta: ' + err.stack);
    res.status(500).send('Erro no servidor ao cadastrar');
  } else {
    console.log('Consulta cadastrada com sucesso. ID: ' + result.insertId);
    res.redirect('/index1');
    // Se este código está sendo executado no servidor, você pode enviar uma resposta para o cliente e manipular a mensagem no lado do cliente com JavaScript.
    // Se você estiver no lado do cliente, use window.alert como está.
    // window.alert('Consulta cadastrada com sucesso');
  }
});
});


app.get('/cadastro', (req, res) => {
  res.render('cadastro');
});

app.post('/cadastro', (req, res) => {
  const { username, password, cpf, telefone, email, sexo, CEP } = req.body;
  const userType = 'user';

  const verificaUsuarioQuery = 'SELECT * FROM cadastro WHERE username = ? OR email = ?';
  
  db.query(verificaUsuarioQuery, [username, email], (err, results) => {
    if (err) {
      res.status(500).send('Erro no servidor ao verificar usuário');
    } else if (results.length > 0) {
      res.send('Usuário ou email já cadastrado');
    } else {
      const cadastroQuery = 'INSERT INTO cadastro (username, password, cpf, telefone, email, sexo, CEP, user_type) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
      
      db.query(cadastroQuery, [username, password, cpf, telefone, email, sexo, CEP, userType], (err, result) => {
        if (err) {
          res.status(500).send('Erro no servidor ao cadastrar');
        } else {
          const user_id = result.insertId;
          const loginQuery = 'INSERT INTO login (user_id, last_login) VALUES (?, NOW())';

          db.query(loginQuery, [user_id], (err, result) => {
            if (err) {
              res.status(500).send('Erro no servidor ao criar login');
            } else {
              res.redirect('/login');
            }
          });
        }
      });
    }
  });
});

app.get('/login', (req, res) => {
  res.render('login');
});


app.get('/userPage', (req, res) => {
  res.render('userPage');
});



app.get('/index', (req, res) => {
  res.render('index');
});

app.get('/index1', checkUserTypeMiddleware([USER_TYPES.USER]), (req, res) => {
    res.render('index1', { req: req }) ;
});

app.get('/index2', (req, res) => {
    res.render('index2');
});

app.get('/index3', (req, res) => {
    res.render('index3');
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const loginQuery = 'SELECT user_id, user_type FROM cadastro WHERE username = ? AND password = ?';
  db.query(loginQuery, [username, password], (err, result) => {
    if (err) {
      res.status(500).send('Erro no servidor ao fazer login');
    } else if (result.length > 0) {
      const user_id = result[0].user_id;
      const user_type = result[0].user_type;

      const userInfoQuery = 'SELECT * FROM login WHERE user_id = ?';
      db.query(userInfoQuery, [user_id], (err, result) => {
        if (err) {
          res.status(500).send('Erro no servidor ao buscar informações de login');
        } else {
          if (user_type === 'admin') {
            res.redirect('/index3');
          } else if (user_type === 'user') {
            res.redirect('/index1');
          } else if (user_type === 'medico') {
            // Redireciona o médico diretamente para a página de consultas dele
            res.redirect('/index2');
          } else {
            res.send('Tipo de usuário desconhecido');
          }
        }
      });
    } else {
      res.send('Nome de usuário ou senha incorretos ou usuário não cadastrado');
    }
  });
});

  // READ
  app.get('/medicoPage', (req, res) => {
    db.query('SELECT * FROM consultas', (err, result) => {
      if (err) throw err;
      const consultas = Array.isArray(results) ? results  : [];
      res.render('medicoPage', { consultas: result });
    });
  });

  app.get('/adminPage', (req, res) => {
    db.query('SELECT * FROM consultas', (err, result) => {
      if (err) throw err;
      const consultas = Array.isArray(results) ? results  : [];
      res.render('adminPage', { consultas: result });
    });
  });


  // cadastro usuarios

  app.get('/adminPage', (req, res) => {
    db.query('SELECT * FROM cadastro', (err, result) => {
      if (err) throw err;
      const cadastro = Array.isArray(results) ? results  : [];
      res.render('adminPage', { cadastro: result });
    });
  });

app.use(express.static(__dirname + '/assets'));
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/views/imagens'));
app.use(express.static(__dirname +'/ImagensProdutos'));

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});