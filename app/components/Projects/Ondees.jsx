const Ondees = () => {
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
                <p>
                    {`La contrebasse sonne vibre et résonne dans l'espace. Cette masse sonore contenue dans la caisse de
                    l'instrument tourne percute traine contre le bois de l'instrument. Le musicien semble laisser
                    l'instrument jouer seul, porté par ses propres vibrations le bois produit de lui même les aspérités qui
                    vont orienter les décisions du musicien. Les oreilles plongent au coeur de l'instrument et s'immergent
                    dans ce totem sonore sur lequel les sons extérieurs viennent se fondre ou ricocher.`}
                </p>

                <div className="soundcloudplayer">
                    <iframe
                        width="100%"
                        height="120"
                        scrolling="no"
                        frameborder="no"
                        allow="autoplay"
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1612899099&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
                    </iframe>
                    <div
                        style={soundcloudStyle1}
                    >
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
                            href="https://soundcloud.com/nclsz/concert_nuit_des_forets_17juin2023"
                            title="Concert Nuit des forêts 17juin2023"
                            target="_blank"
                            style={soundcloudStyle2}
                        >
                            Concert Nuit des forêts 17juin2023
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ondees
