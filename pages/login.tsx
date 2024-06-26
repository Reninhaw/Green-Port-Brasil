import React, { useState } from 'react';
import axios from 'axios';
import Layout from '../components/Layout';
import styles from '../styles/Login.module.css';

const Login: React.FC = () => {
const [email, setEmail] = useState('');
const [senha, setSenha] = useState('');

const req = async ()=>{
    try{
      const response = await axios({
        method: "post",
        url: "http://localhost:8081/login/",
        headers:{"Content-Type":"application/json"},
        data:{
          "email":email,
          "password":senha
        }
      })
      console.log(response);
    }catch(error){
        alert('Erro ao realizar login.');
    }
  }


return (
    <Layout>
    <div className={styles.container}>
        <h1>Login</h1>
        <form className={styles.form} onSubmit={req}>
        <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className={styles.input}
        />
        <input 
            type="password" 
            placeholder="Senha" 
            value={senha} 
            onChange={(e) => setSenha(e.target.value)} 
            className={styles.input}
        />
        <button type="submit" className={styles.button}>Entrar</button>
        </form>
    </div>
    </Layout>
);
};

export default Login;
