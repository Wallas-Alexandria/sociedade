import './main.css'

function QuemSomos() {
    return (
        <section className="hero__background">
            <div className="hero">
                <section className="section__empresa">
                    <section className="section__quem">
                        <h1 id="projeto__nome" className="titulo__empresa">QUEM SOMOS</h1>
                        <p className="paragrafo paragrafo__empresa">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel est tortor. Ut eget nulla vel lorem convallis semper et eu ante.

                        </p>
                    </section>
                    <section className="empresa__info">
                        <div className="circle__info">
                            <p className="circle__paragrafo--wrap">
                                10 anos
                                de <br />
                                história
                            </p>
                        </div>

                        <div className="circle__info">
                            <p className="circle__paragrafo">
                                XXX
                                atendimentos
                                por semana
                            </p>
                        </div>

                        <div className="circle__info">
                            <p className="circle__paragrafo--wrap">
                                150+
                                famílias
                                alcançadas
                            </p>
                        </div>
                    </section>

                </section>
                <iframe src="https://www.youtube.com/embed/wTfmgB3mi-4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </section>

    )
}

export default QuemSomos