import { pool } from "../db.js";

export const Create_register = async (req, res) => {
    try {
            const {nombre_artistico,nombre,correo,contraseña} = req.body;

            if (!nombre_artistico){
                return res.status(422).json({message: 'Por favor llenar el nombre_artistico'})
            }
            if (!nombre){
                return res.status(422).json({message: 'Por favor llenar el nombre'})
            }

            if (!correo){
                return res.status(422).json({message: 'Por favor llenar el correo'})
            }

            if (!contraseña){
                return res.status(422).json({message: 'Por favor llenar la contraseña'})
            }




            const insertQuery = 'INSERT INTO rap(nombre_artistico,nombre,correo,contraseña) VALUES(?,?,?,?)'
            const inserValues = [nombre_artistico,nombre,correo,contraseña];
            const [result] = await pool.query(insertQuery,inserValues);
            console.log(inserValues, '🥰🥰🥰')
            res.status(201).json({message: 'Creacion exitosa'})
            // res.status(201).json({
            //     id_rap:result.insertId,
            //     nombre_artistico,
            //     nombre,
            //     correo,
            //     contraseña
            // })
        } catch (error) {
            console.error('An error occurred in:', error);
            res.status(500).json({ message: 'Server error' });
    }
};