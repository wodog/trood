'use strict'

const api = require('./proxy/api');

function addRouter(router) {
    for (let i = 0; i < router.stack.length; i++) {
        let path = router.stack[i].route.path;
        console.log(typeof path);

        api.addApi({name: path}).then(data => {
            console.log('ok');
        }).catch(err => {
            console.log(err);
        });
    }
}

exports.addRouter = addRouter;