const Sonego = () => {
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
                <p> Sonego est un duo formé de Pierre Guimbail (guitare électrique) et  Nicolas Zentz (basse électrique, électronique).
                    Dans des échanges emprunts de psychédélisme, romantisme, noise et musique industrielle, les deux musiciens explorent les
                    points de jonction entre riff, masse sonore et mélodie.</p>
            </div>
            <div className="soundcloudplayer">
                <iframe
                    width="100%"
                    height="120"
                    scrolling="no"
                    frameborder="no"
                    allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1614338169&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                >
                </iframe>
                <div style={soundcloudStyle1}>
                    <a
                        href="https://soundcloud.com/nicolaszentz"
                        title="Nicolas Zentz"
                        target="_blank"
                        style={soundcloudStyle2}>
                        Nicolas Zentz
                    </a>
                    ·
                    <a
                        href="https://soundcloud.com/nicolaszentz/sonego-1er-set"
                        title="Sonego /\ : 1er set"
                        target="_blank"
                        style={soundcloudStyle2}>
                        Sonego /\ : 1er set
                    </a>
                </div>
            </div>
        </>
    )
}

export default Sonego
