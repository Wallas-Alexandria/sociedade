import './main.css'


function Rodape() {
    return (
        <footer>

            <section className="section__caracteristicas">
                <div className="section__caracteristicas__conteiner">
                    <section className="section__caracteristica">
                        <h1 className="caracteristica__titulo">
                            Missão
                        </h1>
                        <p className="caracteristica__paragrafo">
                            Transformar o meio social das comunidades através de ações
                        </p>
                    </section>

                    <section className="section__caracteristica">
                        <h1 className="caracteristica__titulo">
                            Visão
                        </h1>
                        <p className="caracteristica__paragrafo">
                            Ser uma organização social de referência na co-criação de estratégias
                        </p>
                    </section>

                    <section className="section__caracteristica">
                        <h1 className="caracteristica__titulo">
                            Valores
                        </h1>
                        <p className="caracteristica__paragrafo">
                            Acreditamos e Impulsionamos o individuo a alcançar seus sonhos e objetivos.
                        </p>
                    </section>
                </div>
            </section>
        </footer >
    )
}

export default Rodape