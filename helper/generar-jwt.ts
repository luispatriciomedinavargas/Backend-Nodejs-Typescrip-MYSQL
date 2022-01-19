import jwt from 'jsonwebtoken';

 const generarJWT = (uid = '') => {

    return new Promise((resolve, reject) => {
        const payload = { uid };
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