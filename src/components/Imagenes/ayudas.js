        // orders.add(order).then(id => {
        //     console.log('Orden creada con el id:', id)
        // });

        // Esto es para debugger en consola y ver el item o lo que pinte
        // items.docs.map(d => d.data()).map(({ id, title, price, stock }) => ({ id, title, price, stock } ) )
        // items.docs.map(d => ({ ...d.data(), id: d.id })).map(({ id, title, price, stock }) => ({ id, title, price, stock } ) )
        // const itemQueryByManyId = await db.collection("items")
        // .where(firebase.firestore.FieldPath.documentId(), 
        // 'in', ['Q0VfIIoYzn6Lpc2FBQUg', 'iEuV6tEihe7345pKDL7A'] )
        // .get();

        // const itemQueryByManyId = await db.collection("items")
        // .where(firebase.firestore.FieldPath.documentId(), 
        // 'in', cart.map(c => c.item.id) )
        // .get();

        // const res = await item.ref.update({ stock: item.data().stock - 1 });



// Poli
// async function createOrder() {
//     debugger;
//     const newOrder = {
//         buyer: { name: 'Poli', phone: '+541143432323', email: 'asd@asd' },
//         items: [
//             { id: '1', title: 'zapas', price: 200, quantity: 2 },
//             { id: '2', title: 'gorro', price: 100, quantity: 1 },
//         ], // cart.map(c => ({}))
//         date: firebase.firestore.FieldValue.serverTimestamp(),
//         total: 500,
//     };
//     const db = getFirestore();
//     const orders = db.collection("orders");
//     try {
//         const doc = await orders.add(newOrder);
//         console.log('Order created with id: ', doc.id);
//         // Update stock
//         const itemQueryByManyId = await db.collection("items")
//         .where(firebase.firestore.FieldPath.documentId(), 
//         'in', cart.map(c => c.item.id) )
//         .get();
//         const [item] = itemQueryByManyId.docs;
//         await item.ref.update({ stock: item.data().stock - 1 });
//         // guadar el id en algun estado para mostrarselo
//         // al user
//     } catch (err) {
//         console.log('Error creating order');
//     }
// }