import firestore from '@react-native-firebase/firestore';

const serverTimestamp = firestore.FieldValue.serverTimestamp;// 服務器時間戳

// 建立數據
let createData = async function ({ name, tel } = {}) {
    // for (i = 1; i <= 5; i++) {
    //     const res = await firestore().collection('users').add({
    //         name: '用户' + i,
    //         sex: i % 2 == 0 ? '男' : '女',
    //         regdate: serverTimestamp()
    //     });
    //     console.log('Added document with ID: ', res.id);
    // }

    const res = await firestore().collection('users')
        .add(
            {
                name,
                tel,
                regTime: serverTimestamp()
            }
        )
        .catch(err => {
            console.log('Error getting document', err);
        });

    // console.log('Added document with ID: ', res.id);
}

// 讀取數據
let readData = async function ({ tel } = {}) {
    let rs = [];

    await firestore().collection('users')
        .get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                // console.log(doc.id, '=>', doc.data());
                doc.data().id = doc.id;
                rs.push(doc.data());
            });
        })
        .catch((err) => {
            console.log('Error getting documents', err);
        });

    return rs = tel != undefined ? rs.filter(doc => doc.tel == tel) : rs;
}

// 更新數據
let updateData = async function ({ id, verifyCode } = {}) {
    const refData = firestore().collection('users').doc(id);

    await refData
        .update(
            {
                verifyCode,
                updateTime: serverTimestamp(),
                // age: firestore.FieldValue.delete()// 更新時同時刪除欄位
            }
        )
        .catch((err) => {
            console.log('Error getting documents', err);
        });
}

// 刪除數據
let deleteData = async function ({ id } = {}) {
    await firestore().collection('users').doc(id)
        .delete()
        .catch((err) => {
            console.log('Error getting documents', err);
        });
}

export { createData, readData, updateData, deleteData };