export default function Card({ nome, nomeCien, periodo, imagem }) {
    return (
        <>
            <section>
                <div>
                    <h1>{nome}</h1>
                    <h2>{nomeCien}</h2>
                    <h3>{periodo}</h3>
                    <div style="background-image: url('{imagem}')"></div>
                </div>
            </section>
        </>
    )
}