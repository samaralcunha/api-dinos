export default function Card({ nome, nomeCien, periodo, imagem }) {
    return (
        <>
            <div className="w-1/4 bg-white shadow-lg rounded-lg overflow-hidden bg-[#76c893]">
                <div className="relative">
                    <img className="w-full h-32 object-cover brightness-50 blur-[1px]" src={imagem} alt="Imagem de fundo" />
                    <div className="absolute inset-0 flex items-end p-4">
                        <h2 className="text-white text-3xl font-semibold text-[#99d98c] font-title">{nome}</h2>
                    </div>
                </div>
                <div className="p-4">
                    <p className="text-gray-700  font-period text-lg">{nomeCien}</p>
                    <p className="text-gray-700 font-description text-base">{periodo}</p>
                </div>
            </div>
        </>
    )
}