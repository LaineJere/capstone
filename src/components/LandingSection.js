import Button from './Button';

const LandingSection = () => {
    return (
        <section className="landing-section">
            <div className="overlay-box">
                <div className="content">
                    <div className="title-block">
                        <h1>Little Lemon</h1>
                        <h2>Florença</h2>
                    </div>
                    <div className="content-columns">
                        <div className="info">
                            <p>Somos uma empresa familiar</p>
                            <p><b>Restaurante mediterrâneo</b></p>
                            <p>focado em receitas tradicionais servidas com um toque moderno.</p>
                        </div>
                        <div className="open-hours">
                            <p><b>Horário de funcionamento:</b></p>
                            <p><b>Seg - Qui 10:00 - 21:00</b></p>
                            <p><b>Sex - Dom 10:00 - 24:00</b></p>
                            <p><b>Florence Str 17, Florence, Italy</b></p>
                        </div>
                    </div>
                    <div className="buttons">
                        <Button to="/order">Pedido para entrega</Button>
                        <Button to="/booking-page">Reserve uma mesa</Button>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default LandingSection;