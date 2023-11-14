const Poesie = () => {
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
                <p>{`Pratique sonore de textes, travail sur l'écoute et l'anecdotique, les lieux imaginaires et/ou concrets.`}</p>
            </div>
            <div className="soundcloudplayer">
                <p>Petits Poèmes Audio-Numériques:</p>
                <iframe
                    width="100%"
                    height="300"
                    scrolling="yes"
                    frameborder="no"
                    allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1624613599&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                >
                </iframe>
                <div
                    style={soundcloudStyle1}>
                    <a
                        href="https://soundcloud.com/nclsz"
                        title="nclsz"
                        target="_blank"
                        style={soundcloudStyle2}
                    >
                        nclsz
                    </a>
                    <p>·</p>
                    <a
                        href="https://soundcloud.com/nclsz/sets/poemes-audionumerique" title="Poèmes Audionumérique"
                        target="_blank"
                        style={soundcloudStyle2}
                    >
                        Poèmes Audionumérique
                    </a>
                </div>
            </div>
            <div className="soundcloudplayer">
                <p>Espaces:</p>
                <iframe
                    width="100%"
                    height="300"
                    scrolling="no"
                    frameborder="no"
                    allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1401875479&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                >
                </iframe>
                <div style={soundcloudStyle1}>
                    <a
                        href="https://soundcloud.com/nicolaszentz"
                        title="Nicolas Zentz"
                        target="_blank"
                        style={soundcloudStyle2}
                    >
                        Nicolas Zentz
                    </a>
                    <p>·</p>
                    <a
                        href="https://soundcloud.com/nicolaszentz/sets/espaces"
                        title="Espaces"
                        target="_blank"
                        style={soundcloudStyle2}
                    >
                        Espaces
                    </a>
                </div>
            </div>
        </>
    )
}

export default Poesie