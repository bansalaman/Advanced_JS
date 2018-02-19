class Metacharacters{
    static reTest(re,str){
        if(re.test(str)){
            console.log(`${str} matched ${re.source}`)
        }
        else{
            console.log(`${str} does not match ${re.source}`)
        }
    }
}

//let re =/^s/i    //should start with s and case insensitive search by giving i 
//let re = /nitro$/i    //should end with nitro
//let re=/n.tro$/i       //dot can be only one character and for one time only and can be any character
//let re=/n*tro$/i      //any character multiple times
//let re=/sa?pi?en?t/i     //? is optional means here a,i and n are optional
//Metacharacters.reTest(re,'Sapet Nitro')
//Metacharacters.reTest(re,'Spet Nitro') //matched
//Metacharacters.reTest(re,'Set Nitro') //does not match as p is not optional

//character sets //means not a individual character
//let re = /sa[pi]en?t/i  //either p or i or should be present
//Metacharacters.reTest(re,'Saient Nitro') 

// let re = /[^sa]pien?t/i
let re = /^[A-Za-z]{3,6}t/i //t is for exact match, t is the last character
//Metacharacters.reTest(re,'Sapient') 
let re1 =/Hel{2,4}o/i //o is for exact match, o is the last character
//Metacharacters.reTest(re1,'Hellllo') //matches
let rel2 = /^([0-9]x){3,4}$/
//Metacharacters.reTest(rel2,'3x3x3x3x'); //matches
//Match x only if it is followed by y
//Asssertions
//let re3 = /x(?=y)/
//let re3 = /x(?!y)/
//Metacharacters.reTest(re3,'xzy');

//Shorthand Character Classes
let re5 =/\w/  //word character will take alphanumeric and underscore
//Metacharacters.reTest(re4,'_'); //matches
let re4 =/\w+/   //one or more occurences
//Metacharacters.reTest(re5,'');
let re7 =/\w*/   //used for many when no limit is specified 
//Metacharacters.reTest(re7,' '); //matches
let re8 = /\d/  //used for digits, 
//Metacharacters.reTest(re8,'1231234sadf_53'); //matches, one digit must be there
//Metacharacters.reTest(re8,'sadf_'); //will not match but if digits are there then it would match
let re6 = /\W/ //will take non word characters
//Metacharacters.reTest(re6,'&%^&%^'); //matches
let re9 = /\D/  //for non-digit characters
//Metacharacters.reTest(re9,'123455a');//matches, atleast one non digit must be there
let re10 = /\s/ //for blank space
//Metacharacters.reTest(re10,'       '); //matches,one blank space must be there
//Metacharacters.reTest(re10,'123455a3'); //will not match as one blank space must be there
let re11 = /\S/
//Metacharacters.reTest(re11,' '); //does not match,as one character should be there
let re12 = /Sap\b/i  //b is used for word boundary
//Metacharacters.reTest(re12,'as sap ddn'); //will match, space should be there before and after sap
//Metacharacters.reTest(re12,'_sap ddn'); //will match
let re13 = /^\wSap\b\sient$/i
//Metacharacters.reTest(re13,'_sap ient'); //will matched

let email = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z_\-]+).([a-zA-Z]{2,5})$/
//Metacharacters.reTest(email,'amanbansalgehu@gmail');

let phone = /^(\W?\d{2,3}[-. ])?(\d{3,4}[-. ])?\d{7,8}$/
//Metacharacters.reTest(phone,'091-080-2629061');
 
let url = /^(https?:\/\/)?www.[A-Za-z0-9]{1,}.com$/
Metacharacters.reTest(url,' http://www.mi.com')
Metacharacters.reTest(url,'https://www.google.com')
Metacharacters.reTest(url,'www.sapient.com')