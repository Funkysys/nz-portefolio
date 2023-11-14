const Cils = () => {
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
                <p>{`Cils´ est un duo composé de Aline Bissey (flutes) et Nicolas Zentz (contrebasse). La contrebasse est comme un point de repère pour l'oreille: terreau des illusions produites par les oscillations de la flûte. Celle-ci se pose, s'envole ou vient vibrer en contrepoint de la contrebasse produisant des textures pleines et fines.`}
                    <br />
                    {`Les cils sont à la frontière du regard, enroulés aux tympans, ils sont postés en avant de la lisières des sens et de l'illusion.`}</p>
            </div>
            <div className="soundcloudplayer">
                <iframe
                    width="100%"
                    height="120"
                    scrolling="no"
                    frameborder="no"
                    allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1613105931%3Fsecret_token%3Ds-0qHoWtIMUVW&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                >
                </iframe>
                <div
                    style={soundcloudStyle1}>
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
                    href="https://soundcloud.com/nicolaszentz/cils/s-0qHoWtIMUVW"
                    title="Cils"
                    target="_blank"
                    style={soundcloudStyle2}
                >
                    Cils
                </a>
            </div>
        </div >
        </>
    )
}

export default Cils
