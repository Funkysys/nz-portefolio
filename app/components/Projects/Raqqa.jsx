const Raqqa = () => {
    const soundcloudStyle1 = {
        fontSize: "10px",
        color: "#cccccc",
        lineBreak: "anywhere",
        wordBreak: "normal",
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        fontFamily: "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
        fontWeight: "100"
    }
    const soundcloudStyle2 = {
        color: "#cccccc",
        textDecoration: "none"
    }
    return (
        <>
            <div className="infos">
                <p> {`Raqqa: Nicolas Zentz (électronique), Nino Baleyte (électronique) évoque le tumulte, la nécessité qu’ont
                la créativité et l’expression humaine de surgir dans le monde de façon imprévisible, sans contrainte et
                parfois brutale. Il s’agit de faire naître de la confrontation d’éléments sonores basiques, tout un
                écosystème d’éléments complexes et interdépendants donnant lieux à de véritables tableaux sonores.

                L’auditeur expérimente au travers de ces tableaux sonores les frontières troubles entre le bruit et la
                musique, entre la conscience et l’inconscience, le contrôle et le lâcher prise. Quand son oreille se
                laisse guider par des sons qui lui auraient habituellement échappés, le spectateur se surprend à prendre
                du recul sur son attention au monde qui l’entoure.`}
                </p>
            </div>
            <div className="soundcloudplayer">
                <p>Album <i>Flying Ginsu VII</i> disponible de puis le 22 septembre sur <i>Esc.rec</i>:</p>
                <iframe style={{border: "0", width: "100%", height: "120px"}}
                    src="https://bandcamp.com/EmbeddedPlayer/album=1619123267/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/"
                    seamless><a href="https://escrec.bandcamp.com/album/flying-ginsu-vii">Flying Ginsu VII by
                        RAQQA</a></iframe>
            </div>
            <div className="soundcloudplayer">
                <iframe width="100%" height="120" scrolling="no" frameborder="no" allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1353073450&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
                <div
                    style={soundcloudStyle1}>
                    <a
                        href="https://soundcloud.com/nino-baleyte"
                        title="Nino Baleyte"
                        target="_blank"
                        style={soundcloudStyle2}
                    >
                        Nino Baleyte
                    </a>
                    ·
                    <a
                        href="https://soundcloud.com/nino-baleyte/apoptose-i-extract"
                        title="Apoptose I (extract)"
                        target="_blank" 
                        style={soundcloudStyle2}
                    >
                        Apoptose I (extract)
                    </a>
                </div>
            </div>
        </>
    )
}

export default Raqqa

