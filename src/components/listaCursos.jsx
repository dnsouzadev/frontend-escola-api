import React, { Component } from 'react';

class ListaCursos extends Component {
    state = {
        data: [],
        loaded: false
    }

    componentDidMount() {
      fetch("http://localhost:8000/cursos/")
        .then(response => {
          if (response.status > 400) {
            console.log("Erro na requisição");
            // You can also return an empty object or handle the error in another way here
            return;
          }
          return response.json();
        })
        .then(data => {
          // Make sure data is not undefined due to previous return
          if (data) {
            this.setState({
              data,
              loaded: true
            });
          }
        })
        .catch(error => {
          // Handle network errors
          console.error("Network error:", error);
          alert("Erro na rede", error);
        });
    }


      render() {
        return (
            <div>
            {this.state.data.map(curso => {
              return (
                <h2 key={curso.id} className='App-table'>
                  {curso.descricao}
                </h2>
              );
            })}
          </div>
        );
      }
    }

export default ListaCursos;
