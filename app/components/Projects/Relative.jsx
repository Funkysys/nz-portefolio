const Relative = () => {
    return (
        <>
            <div className="infos">
                <p>{`Relative Mouton est un duo "plus ou moins de chansons" en collaboration avec la poète sonore Axelle Glé.`}
                    <br />
                    {`C'est l'occasion d'expérimenter avec des formes atypiques, d'écrire des chansons allant du drone à la petite chanson ironique en passant par la pop et la musique improvisée.`}
                </p>

            </div>
            <div className="soundcloudplayer">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/YKVrtRCsb60"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                >
                </iframe>
            </div>
        </>
    )
}

export default Relative
