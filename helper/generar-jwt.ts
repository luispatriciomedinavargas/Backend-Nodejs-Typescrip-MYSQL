import jwt from 'jsonwebtoken';

 const generarJWT = (id = '') => {

    return new Promise((resolve, reject) => {
        const payload = { id };
        const secretkey = process.env.SECRETORPRIVATEKEY || 'Pablit0C14VoUnClavo';
        jwt.sign(payload, secretkey, {
            expiresIn: '4h'
        }, (err, token) => {

            if (err) {
                console.log(err)
                reject('can not generate the token')
            }
            else {
                resolve(token);
            }

        })
    })

}

export default generarJWT;