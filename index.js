const http = require('http');
const path = require('path');
const fs = require('fs')
const express = require('express');
const router = express.Router();
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/schoolData', { useNewUrlParser: true, useUnifiedTopology: true })
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const student = new mongoose.Schema({
    srno: String,
    dob: String,
    class: String,
    name: String,
    mothername: String,
    fathername: String,
    address: String,
    caste: String,
    gender: String,
    admissiondate: String
});
const bachha = mongoose.model('2019-2020', student);

// static chize

app.use(express.static(path.join(__dirname, 'public')));
router.get('/mainpage.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'mainpage.html'));
});
router.get('/gallery.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'gallery.html'));
});
router.get('/login.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'login.html'));
});
router.get('/lastpage.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'lastpage.html'));
});



// data dikahana hai yah pe 



app.get('/html/class1', (req, res) => {
    let str = ""; //ye reload par reset kar deta hai
    let string1 = fs.readFileSync('./public/html/showhead.html')
    string1 = string1 + '<h1>Class 1</h1>'
    let string2 = fs.readFileSync('./public/html/showfoot.html')
    bachha.find({class:'1'},function (err, s) {
        if (err) return console.error(err);
        for (let i = 0; i < s.length; i++) {
            str = str + `<tr><td>${s[i]['srno']}</td>
                        <td>${s[i]['dob']}</td>
                        <td>${s[i]['name']}</td>
                        <td>${s[i]['mothername']}</td>
                        <td>${s[i]['fathername']}</td>
                        <td>${s[i]['address']}</td>
                        <td>${s[i]['caste']}</td>
                        <td>${s[i]['gender']}</td>
                        <td>${s[i]['admissiondate']}</td></tr>`
        }
        res.send(string1 + str + string2);
    })
});
app.get('/html/class2', (req, res) => {
    let str = ""; //ye reload par reset kar deta hai
    let string1 = fs.readFileSync('./public/html/showhead.html')
    string1 = string1 + '<h1>Class 2</h1>'
    let string2 = fs.readFileSync('./public/html/showfoot.html')
    bachha.find({class:'2'},function (err, s) {
        if (err) return console.error(err);
        for (let i = 0; i < s.length; i++) {
            str = str + `<tr><td>${s[i]['srno']}</td>
                        <td>${s[i]['dob']}</td>
                        <td>${s[i]['name']}</td>
                        <td>${s[i]['mothername']}</td>
                        <td>${s[i]['fathername']}</td>
                        <td>${s[i]['address']}</td>
                        <td>${s[i]['caste']}</td>
                        <td>${s[i]['gender']}</td>
                        <td>${s[i]['admissiondate']}</td></tr>`
        }
        res.send(string1 + str + string2);
    })
});
app.get('/html/class3', (req, res) => {
    let str = ""; //ye reload par reset kar deta hai
    let string1 = fs.readFileSync('./public/html/showhead.html')
    string1 = string1 + '<h1>Class 3</h1>'
    let string2 = fs.readFileSync('./public/html/showfoot.html')
    bachha.find({class:'3'},function (err, s) {
        if (err) return console.error(err);
        for (let i = 0; i < s.length; i++) {
            str = str + `<tr><td>${s[i]['srno']}</td>
                        <td>${s[i]['dob']}</td>
                        <td>${s[i]['name']}</td>
                        <td>${s[i]['mothername']}</td>
                        <td>${s[i]['fathername']}</td>
                        <td>${s[i]['address']}</td>
                        <td>${s[i]['caste']}</td>
                        <td>${s[i]['gender']}</td>
                        <td>${s[i]['admissiondate']}</td></tr>`
        }
        res.send(string1 + str + string2);
    })
});
app.get('/html/class4', (req, res) => {
    let str = ""; //ye reload par reset kar deta hai
    let string1 = fs.readFileSync('./public/html/showhead.html')
    string1 = string1 + '<h1>Class 4</h1>'
    let string2 = fs.readFileSync('./public/html/showfoot.html')
    bachha.find({class:'4'},function (err, s) {
        if (err) return console.error(err);
        for (let i = 0; i < s.length; i++) {
            str = str + `<tr><td>${s[i]['srno']}</td>
                        <td>${s[i]['dob']}</td>
                        <td>${s[i]['name']}</td>
                        <td>${s[i]['mothername']}</td>
                        <td>${s[i]['fathername']}</td>
                        <td>${s[i]['address']}</td>
                        <td>${s[i]['caste']}</td>
                        <td>${s[i]['gender']}</td>
                        <td>${s[i]['admissiondate']}</td></tr>`
        }
        res.send(string1 + str + string2);
    })
});
app.get('/html/class5', (req, res) => {
    let str = ""; //ye reload par reset kar deta hai
    let string1 = fs.readFileSync('./public/html/showhead.html')
    string1 = string1 + '<h1>Class 5</h1>'
    let string2 = fs.readFileSync('./public/html/showfoot.html')
    bachha.find({class:'5'},function (err, s) {
        if (err) return console.error(err);
        for (let i = 0; i < s.length; i++) {
            str = str + `<tr><td>${s[i]['srno']}</td>
                         <td>${s[i]['dob']}</td>
                         <td>${s[i]['name']}</td>
                         <td>${s[i]['mothername']}</td>
                         <td>${s[i]['fathername']}</td>
                         <td>${s[i]['address']}</td>
                         <td>${s[i]['caste']}</td>
                         <td>${s[i]['gender']}</td>
                         <td>${s[i]['admissiondate']}</td></tr>`
        }
        res.send(string1 + str + string2);
    })
});



// data edit karne wala 
const NodeCache = require("node-cache");
const myCache = new NodeCache();
function auth() {

    value = myCache.get("myKey");
    console.log(value);
    if(value==undefined) return 0;
        if (value.name != 'sanjay', value.password != '1234') {
            return 0;
        }
    return 1;
}
app.get('/html/auth', (req, res) => {
    obj = { name: req.query.name, password: req.query.password };
    success = myCache.set("myKey", obj, 300);
    res.redirect('/html/editclass1');
});
app.get('/html/logout', (req, res) => {
   myCache.del('myKey');
    res.redirect('/html/mainpage.html');
});
app.get('/html/editclass1', (req, res) => {
    let str = ""; //ye reload par reset kar deta hai
    var string1 = fs.readFileSync('./public/html/updatehead.html')
    string1 = string1 + '<h1>Class 1</h1>  <form action="update1" method="get">'
    var string2 = fs.readFileSync('./public/html/updatefoot.html')
    string2 = '<a href="enterdata1" class="implinks">New Student</a>' + string2
    if (!auth()) {
        res.send('SOME ERROR OCCURED')
    }
    else {
        bachha.find({class:'1'},function (err, s) {
            if (err) return console.error(err);
            for (let i = 0; i < s.length; i++) {
                str = str + `<tr>
                <td><input name='srno' type='number' value="${s[i]['srno']}"></td>
                <td><input name='dob' type='date' value="${s[i]['dob']}"></td>
                <td><input name='name' type='text' value="${s[i]['name']}"></td>
                <td><input name='mothername' type='text' value="${s[i]['mothername']}"></td>
                <td><input name='fathername' type='text' value="${s[i]['fathername']}"></td>
                <td><input name='address' type='text' value="${s[i]['address']}"></td>
                <td><input name='caste' type='text' value="${s[i]['caste']}"></td>
                <td><input name='gender' type='text' value="${s[i]['gender']}"></td>
                <td><input name='admissiondate' type='date' value="${s[i]['admissiondate']}"></td>
                <td><input type="radio" name="delete" value="${s[i]['srno']}"></td>
                </tr>`
            }
            res.send(string1 + str + string2);
        })
    }
});
app.get('/html/editclass2', (req, res) => {
    let str = ""; //ye reload par reset kar deta hai
    var string1 = fs.readFileSync('./public/html/updatehead.html')
    string1 = string1 + '<h1>Class 2</h1>  <form action="update2" method="get">'
    var string2 = fs.readFileSync('./public/html/updatefoot.html')
    string2 = '<a href="enterdata2" class="implinks">New Student</a>' + string2;
    if (!auth()) {
        res.send('SOME ERROR OCCURED')
    }
    else {
        bachha.find({class:'2'},function (err, s) {
            if (err) return console.error(err);
            for (let i = 0; i < s.length; i++) {
                str = str + `<tr>
               <td><input name='srno' type='number' value="${s[i]['srno']}"></td>
               <td><input name='dob' type='date' value="${s[i]['dob']}"></td>
               <td><input name='name' type='text' value="${s[i]['name']}"></td>
               <td><input name='mothername' type='text' value="${s[i]['mothername']}"></td>
               <td><input name='fathername' type='text' value="${s[i]['fathername']}"></td>
               <td><input name='address' type='text' value="${s[i]['address']}"></td>
               <td><input name='caste' type='text' value="${s[i]['caste']}"></td>
               <td><input name='gender' type='text' value="${s[i]['gender']}"></td>
               <td><input name='admissiondate' type='date' value="${s[i]['admissiondate']}"></td>
               <td><input type="radio" name="delete" value="${s[i]['srno']}"></td>
               </tr>`
            }
            res.send(string1 + str + string2);
        })
    }
});
app.get('/html/editclass3', (req, res) => {
    let str = ""; //ye reload par reset kar deta hai
    var string1 = fs.readFileSync('./public/html/updatehead.html')
    string1 = string1 + '<h1>Class 3</h1>  <form action="update3" method="get">'
    var string2 = fs.readFileSync('./public/html/updatefoot.html')
    string2 = '<a href="enterdata3" class="implinks">New Student</a>' + string2
    if (!auth()) {
        res.send('SOME ERROR OCCURED')
    }
    else {
        bachha.find({class:'3'},function (err, s) {
            if (err) return console.error(err);
            for (let i = 0; i < s.length; i++) {
                str = str + `<tr>
               <td><input name='srno' type='number' value="${s[i]['srno']}"></td>
               <td><input name='dob' type='date' value="${s[i]['dob']}"></td>
               <td><input name='name' type='text' value="${s[i]['name']}"></td>
               <td><input name='mothername' type='text' value="${s[i]['mothername']}"></td>
               <td><input name='fathername' type='text' value="${s[i]['fathername']}"></td>
               <td><input name='address' type='text' value="${s[i]['address']}"></td>
               <td><input name='caste' type='text' value="${s[i]['caste']}"></td>
               <td><input name='gender' type='text' value="${s[i]['gender']}"></td>
               <td><input name='admissiondate' type='date' value="${s[i]['admissiondate']}"></td>
               <td><input type="radio" name="delete" value="${s[i]['srno']}"></td>
               </tr>`
            }
            res.send(string1 + str + string2);
        })
    }
});
app.get('/html/editclass4', (req, res) => {
    let str = ""; //ye reload par reset kar deta hai
    var string1 = fs.readFileSync('./public/html/updatehead.html')
    string1 = string1 + '<h1>Class 4</h1>  <form action="update4" method="get">'
    var string2 = fs.readFileSync('./public/html/updatefoot.html')
    string2 = '<a href="enterdata4" class="implinks">New Student</a>' + string2
    if (!auth()) {
        res.send('SOME ERROR OCCURED')
    }
    else {
        bachha.find({class:'4'},function (err, s) {
            if (err) return console.error(err);
            for (let i = 0; i < s.length; i++) {
                str = str + `<tr>
               <td><input name='srno' type='number' value="${s[i]['srno']}"></td>
               <td><input name='dob' type='date' value="${s[i]['dob']}"></td>
               <td><input name='name' type='text' value="${s[i]['name']}"></td>
               <td><input name='mothername' type='text' value="${s[i]['mothername']}"></td>
               <td><input name='fathername' type='text' value="${s[i]['fathername']}"></td>
               <td><input name='address' type='text' value="${s[i]['address']}"></td>
               <td><input name='caste' type='text' value="${s[i]['caste']}"></td>
               <td><input name='gender' type='text' value="${s[i]['gender']}"></td>
               <td><input name='admissiondate' type='date' value="${s[i]['admissiondate']}"></td>
               <td><input type="radio" name="delete" value="${s[i]['srno']}"></td>
               </tr>`
            }
            res.send(string1 + str + string2);
        })
    }
});

app.get('/html/editclass5', (req, res) => {
    let str = ""; //ye reload par reset kar deta hai
    var string1 = (fs.readFileSync('./public/html/updatehead.html'))
    string1 = string1 + '<h1>Class 5</h1>  <form action="update5" method="get">'
    var string2 = fs.readFileSync('./public/html/updatefoot.html')
    string2 = '<a href="enterdata5" class="implinks">New Student</a>' + string2
    if (!auth()) {
        res.send('SOME ERROR OCCURED')
    }
    else {
        bachha.find({class:'5'},function (err, s) {
            if (err) return console.error(err);
            for (let i = 0; i < s.length; i++) {
                str = str + `<tr>
               <td><input name='srno' type='number' value="${s[i]['srno']}"></td>
               <td><input name='dob' type='date' value="${s[i]['dob']}"></td>
               <td><input name='name' type='text' value="${s[i]['name']}"></td>
               <td><input name='mothername' type='text' value="${s[i]['mothername']}"></td>
               <td><input name='fathername' type='text' value="${s[i]['fathername']}"></td>
               <td><input name='address' type='text' value="${s[i]['address']}"></td>
               <td><input name='caste' type='text' value="${s[i]['caste']}"></td>
               <td><input name='gender' type='text' value="${s[i]['gender']}"></td>
               <td><input name='admissiondate' type='date' value="${s[i]['admissiondate']}"></td>
               <td><input type="radio" name="delete" value="${s[i]['srno']}"></td>
               </tr>`
            }
            res.send(string1 + str + string2);
        })
    }
});


// data update karne wala


app.get('/html/update1', (req, res) => {
    bachha.find({class:'1'},function (err, s) {
        if (err) return console.error(err);
        for (let i = 0; i < s.length; i++) {
            s[i].srno = req.query.srno[i]
            s[i].dob = req.query.dob[i]
            s[i].name = req.query.name[i]
            s[i].mothername = req.query.mothername[i]
            s[i].fathername = req.query.fathername[i]
            s[i].address = req.query.address[i]
            s[i].caste = req.query.caste[i]
            s[i].gender = req.query.gender[i]
            s[i].admissiondate = req.query.admissiondate[i]
            s[i].save();
        }
        bachha.findOneAndDelete({srno: req.query.delete }, function (err, doc) {
            if (err) return console.error(err);
        })
        res.redirect("/html/lastpage.html");
    })
})
app.get('/html/update2', (req, res) => {
    bachha.find({class:'2'},function (err, s) {
        if (err) return console.error(err);
        for (let i = 0; i < s.length; i++) {
            s[i].srno = req.query.srno[i]
            s[i].dob = req.query.dob[i]
            s[i].name = req.query.name[i]
            s[i].mothername = req.query.mothername[i]
            s[i].fathername = req.query.fathername[i]
            s[i].address = req.query.address[i]
            s[i].caste = req.query.caste[i]
            s[i].gender = req.query.gender[i]
            s[i].admissiondate = req.query.admissiondate[i]
            s[i].save();
        }
        bachha.findOneAndDelete({srno: req.query.delete }, function (err, doc) {
            if (err) return console.error(err);
        })
        res.redirect("/html/lastpage.html");
    })
})
app.get('/html/update3', (req, res) => {
    bachha.find({class:'3'},function (err, s) {
        if (err) return console.error(err);
        for (let i = 0; i < s.length; i++) {
            s[i].srno = req.query.srno[i]
            s[i].dob = req.query.dob[i]
            s[i].name = req.query.name[i]
            s[i].mothername = req.query.mothername[i]
            s[i].fathername = req.query.fathername[i]
            s[i].address = req.query.address[i]
            s[i].caste = req.query.caste[i]
            s[i].gender = req.query.gender[i]
            s[i].admissiondate = req.query.admissiondate[i]
            s[i].save();
        }
        bachha.findOneAndDelete({srno: req.query.delete }, function (err, doc) {
            if (err) return console.error(err);
        })
        res.redirect("/html/lastpage.html");
    })
})
app.get('/html/update4', (req, res) => {
    bachha.find({class:'4'},function (err, s) {
        if (err) return console.error(err);
        for (let i = 0; i < s.length; i++) {
            s[i].srno = req.query.srno[i]
            s[i].dob = req.query.dob[i]
            s[i].name = req.query.name[i]
            s[i].mothername = req.query.mothername[i]
            s[i].fathername = req.query.fathername[i]
            s[i].address = req.query.address[i]
            s[i].caste = req.query.caste[i]
            s[i].gender = req.query.gender[i]
            s[i].admissiondate = req.query.admissiondate[i]
            s[i].save();
        }
        bachha.findOneAndDelete({srno: req.query.delete }, function (err, doc) {
            if (err) return console.error(err);
        })
    })
    res.redirect("/html/lastpage.html");
})
app.get('/html/update5', (req, res) => {
    bachha.find({class:'5'},function (err, s) {
        if (err) return console.error(err);
        for (let i = 0; i < s.length; i++) {
            s[i].srno = req.query.srno[i]
            s[i].dob = req.query.dob[i]
            s[i].name = req.query.name[i]
            s[i].mothername = req.query.mothername[i]
            s[i].fathername = req.query.fathername[i]
            s[i].address = req.query.address[i]
            s[i].caste = req.query.caste[i]
            s[i].gender = req.query.gender[i]
            s[i].admissiondate = req.query.admissiondate[i]
            s[i].save();
        }
        bachha.findOneAndDelete({srno: req.query.delete }, function (err, doc) {
            if (err) return console.error(err);
        })
        res.redirect("/html/lastpage.html");
    })
})


// alag se ek form naya data dalne ka
app.get('/html/enterdata1', (req, res) => {
    let string = fs.readFileSync('./public/html/enterdata.html')
    let s = string.toString();
    s = s.replace('<h1>Class</h1>', "<h1>Class 1</h1>")
    s = s.replace('<form ', "<form action='save1'")
    res.send(s);
})
app.get('/html/enterdata2', (req, res) => {
    let string = fs.readFileSync('./public/html/enterdata.html')
    let s = string.toString();
    s = s.replace('<h1>Class</h1>', "<h1>Class 2</h1>")
    s = s.replace('<form ', "<form action='save2'")
    res.send(s);
})
app.get('/html/enterdata3', (req, res) => {
    let string = fs.readFileSync('./public/html/enterdata.html')
    let s = string.toString();
    s = s.replace('<h1>Class</h1>', "<h1>Class 3</h1>")
    s = s.replace('<form ', "<form action='save3'")
    res.send(s);
})
app.get('/html/enterdata4', (req, res) => {
    let string = fs.readFileSync('./public/html/enterdata.html')
    let s = string.toString();
    s = s.replace('<h1>Class</h1>', "<h1>Class 4</h1>")
    s = s.replace('<form ', "<form action='save4'")
    res.send(s);
})
app.get('/html/enterdata5', (req, res) => {
    let string = fs.readFileSync('./public/html/enterdata.html')
    let s = string.toString();
    s = s.replace('<h1>Class</h1>', "<h1>Class 5</h1>")
    s = s.replace('<form ', "<form action='save5'")
    res.send(s);
})

// alag se ek form naya data dalne ka uska endpoint

app.get('/html/save1', (req, res) => {
    const ekbachha = new bachha({
        srno: req.query.srno,
        dob: req.query.dob,
        class:'1',
        name: req.query.name,
        mothername: req.query.mothername,
        fathername: req.query.fathername,
        address: req.query.address,
        caste: req.query.caste,
        gender: req.query.gender,
        admissiondate: req.query.admissiondate
    })
    ekbachha.save();
    res.redirect("/html/lastpage.html");
})
app.get('/html/save2', (req, res) => {
    const ekbachha = new bachha({
        srno: req.query.srno,
        dob: req.query.dob,
        class:'2',
        name: req.query.name,
        mothername: req.query.mothername,
        fathername: req.query.fathername,
        address: req.query.address,
        caste: req.query.caste,
        gender: req.query.gender,
        admissiondate: req.query.admissiondate
    })
    ekbachha.save();
    res.redirect("/html/lastpage.html");
})
app.get('/html/save3', (req, res) => {
    const ekbachha = new bachha({
        srno: req.query.srno,
        dob: req.query.dob,
        class:'3',
        name: req.query.name,
        mothername: req.query.mothername,
        fathername: req.query.fathername,
        address: req.query.address,
        caste: req.query.caste,
        gender: req.query.gender,
        admissiondate: req.query.admissiondate
    })
    ekbachha.save();
    res.redirect("/html/lastpage.html");
})
app.get('/html/save4', (req, res) => {
    const ekbachha = new bachha({
        srno: req.query.srno,
        dob: req.query.dob,
        class:'4',
        name: req.query.name,
        mothername: req.query.mothername,
        fathername: req.query.fathername,
        address: req.query.address,
        caste: req.query.caste,
        gender: req.query.gender,
        admissiondate: req.query.admissiondate
    })
    ekbachha.save();
    res.redirect("/html/lastpage.html");
})
app.get('/html/save5', (req, res) => {
    const ekbachha = new bachha({
        srno: req.query.srno,
        dob: req.query.dob,
        class:'5',
        name: req.query.name,
        mothername: req.query.mothername,
        fathername: req.query.fathername,
        address: req.query.address,
        caste: req.query.caste,
        gender: req.query.gender,
        admissiondate: req.query.admissiondate
    })
    ekbachha.save();
    res.redirect("/html/lastpage.html");
})
app.get('/html/student', (req, res) => {
    let string = fs.readFileSync('./public/html/idcard.html')
    bachha.findOne({srno: req.query.srno},function(err,s){
        let p = string.toString();
        if (err) return console.error(err);
        if(s==null){
            res.send('<h1>not found</h1>')
        }
        else{
            p = p.replace('Sr No :',`Sr No : ${s['srno']}`)
            p = p.replace('Name :',`Name : ${s['name']}`)
            p = p.replace('Class :',`Class : ${s['class']}`)
            p = p.replace('Gender :',`Gender : ${s['gender']}`)
            p = p.replace('Date of Birth :',`Date of Birth : ${s['dob']}`)
            p = p.replace(`Mother's Name :`,`Mother's Name : ${s['mothername']}`)
            p = p.replace(`Father's Name :`,`Father's Name : ${s['fathername']}`)
            p = p.replace('Admission Date:',`Admission Date: ${s['admissiondate']}`)
            p = p.replace('Address :',`Address : ${s['address']}`)
            res.send(p);
        }

    })
})
const server = http.createServer(app);
server.listen(3000);




