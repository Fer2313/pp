import { getFraseById } from "./handlers/fraseHandlers"

export default async function getFraseRoute(req, res) {
    const {id} = req.query
    try {
    const result = await getFraseById(id)
    res.json(result)
   } catch (error) {
    res.status(400).json({ error: error.message })
   }
 }