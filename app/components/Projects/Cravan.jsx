const Cravan = () => {
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
                <p> {`Cravan est le lieu du bruit le plus confus, de l'aigu le plus tranchant. Entre désorientation et
                immersion, avec ce solo d'électronique Nicolas Zentz explore les possibilités offertes par l'esthétique
                harsh noise, la poésie sonore et le field recording. Il en résulte une expérience violemment douce
                doucement violente une masse pleine et authentique de sons humains et électriques.`}
                </p>
            </div>
            <div className="soundcloudplayer">
                <iframe width="100%" height="120" scrolling="no" frameborder="no" allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1524468706&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
                <div
                    style={soundcloudStyle1}>
                    <a
                        href="https://soundcloud.com/nclsz"
                        title="nclsz"
                        target="_blank"
                        style={soundcloudStyle2}
                    >
                        nclsz
                    </a> · <a
                        href="https://soundcloud.com/nclsz/engaresousvide"
                        title="En gare sous vide"
                        target="_blank"
                        style={soundcloudStyle2}
                    >
                        En gare sous vide
                    </a>
                </div>
            </div>

            <div className="soundcloudplayer">
                <iframe width="100%" height="120" scrolling="no" frameborder="no" allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1223294428&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
                <div
                    style={soundcloudStyle1}>
                    <a href="https://soundcloud.com/nclsz" title="nclsz" target="_blank"
                        style={soundcloudStyle2}>nclsz</a> · <a
                            href="https://soundcloud.com/nclsz/10a1" title="10" target="_blank"
                            style={soundcloudStyle2}>10</a></div>

            </div>
        </>
    )
}

export default Cravan