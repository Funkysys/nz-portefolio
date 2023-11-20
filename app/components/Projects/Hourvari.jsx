const Hourvari = () => {
    return (
        <>
            <div className="infos">
                <p> {`Hourvari est un duo réunissant Nicolas Zentz (contrebasse) et Armand Lesecq (électronique).`}
                </p>
                <p>
                    {`La musique d'Hourvari commence avec l'écoute de la contrebasse, on y explore ses timbres et ses
                vibrations, on y cherche, on y plonge. Dans un même mouvement, le duo sculpte les matériaux sonores dans
                l'instant : le geste instrumental se précise et s'étend alors que l'électronique déforme et déplace. Les
                éléments s'y agencent en strates, on peut y lire des lignes et des échos ciselés, des failles rugueuses
                et des traces bruiteuses.
                Le temps du concert s'étire puis son espace sombre.`}
                </p>
                <p>
                    {`

                Hourvari: acte de ruse d’un animal traqué qui consiste à revenir sur ses pas, à « rebrousser chemin »
                dans le but de brouiller les pistes.`}
                </p>
            </div>
            <div className="soundcloudplayer">
                <p>Album <i>Concrétions</i> disponible de puis le 02 Février sur <i>Ligne de Crête</i>:</p>
                <iframe
                    style={{ border: "0", width: "100%", height: "120px" }}
                    src="https://bandcamp.com/EmbeddedPlayer/album=470670611/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/"
                    seamless>
                    <a
                        href="https://lignedecrete.bandcamp.com/album/concr-tions">
                        Concrétions by Hourvari
                    </a>
                </iframe>
            </div>
        </>
    )
}

export default Hourvari

