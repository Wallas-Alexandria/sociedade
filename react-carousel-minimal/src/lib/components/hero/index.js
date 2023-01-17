import './main.css'

function Hero() {
    return (
        <section className="hero__background">
            <div className="hero">
                <section className="section__empresa">
                    <section className="section__quem">
                        <h1 id="projeto__nome" className="titulo__empresa">Quem somos?</h1>
                        <p className="paragrafo paragrafo__empresa">
                            Somos uma organização não-governamental com sede em Duque de Caxias-RJ.
                            Atualmente a instituição é formada por uma equipe de mais de 50 voluntários, das
                            áreas de RH, Pedagogia, Publicidade e Marketing e Tecnologia.
                            Temos o programa Trilha de Carreira, que visa o desenvolvimento pessoal e
                            profissional através do nosso ambiente de voluntariado, funcionando como um
                            laboratório de experiências profissionais.
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

export default Hero