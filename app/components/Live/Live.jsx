import { futurEvents, pastEvents } from '../../datas/events'

const Live = () => {
    return (
        <div className="concerts">
            <h3>Évènements à venir :</h3>
            <table>
                <thead></thead>
                <tbody>
                    {
                        futurEvents.map(elt => {
                            return (
                                <tr key={elt.id}>
                                    <td>{elt.date}</td>
                                    <td>{elt.band}</td>
                                    <td>{elt.club}</td>
                                    <td>{elt.city}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
                <tfoot></tfoot>
            </table>
            <br />
            <h3>Évènements passés :</h3>
            <table>
                <thead></thead>
                <tbody>
                    {
                        pastEvents.map(elt => {
                            return (
                                <tr key={elt.id}>
                                    <td>{elt.date}</td>
                                    <td>{elt.band}</td>
                                    <td>{elt.club}</td>
                                    <td>{elt.city}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
                <tfoot></tfoot>
            </table>
        </div>
    )
}

export default Live