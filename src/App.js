import React, { useState } from 'react';
import './App.css';

export default function ReservaMesaForm() {
  const [formData, setFormData] = useState({
    nome: '',
    data: '',
    hora: '',
    numeroPedido: '',
  });

  const [mensagem, setMensagem] = useState('');
  const [erro, setErro] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensagem('');
    setErro('');

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Erro ao enviar reserva.');

      setMensagem(`Reserva feita com sucesso para ${formData.nome}`);
    } catch (err) {
      setErro('Falha ao enviar a reserva. Tente novamente.');
    }
  };

  return (
    <form className="reserva-form" onSubmit={handleSubmit} aria-label="Formulário de Reserva">
      <h2>Reserva de Mesa</h2>

      <label htmlFor="nome">Nome completo</label>
      <input
        id="nome"
        name="nome"
        type="text"
        value={formData.nome}
        onChange={handleChange}
        required
        aria-required="true"
      />

      <label htmlFor="data">Data</label>
      <input
        id="data"
        name="data"
        type="date"
        value={formData.data}
        onChange={handleChange}
        required
      />

      <label htmlFor="hora">Hora</label>
      <input
        id="hora"
        name="hora"
        type="time"
        value={formData.hora}
        onChange={handleChange}
        required
      />

      <label htmlFor="numeroPessoas">Quantas Pessoas</label>
      <input
        id="numeroPessoas"
        name="numeroPessoas"
        type="text"
        value={formData.numeroPessoas}
        onChange={handleChange}
        required
      />

      <button type="submit" aria-label="Enviar reserva">Enviar Reserva</button>

      {mensagem && <p className="mensagem-sucesso">{mensagem}</p>}
      {erro && <p className="mensagem-erro">{erro}</p>}
    </form>
  );
}
