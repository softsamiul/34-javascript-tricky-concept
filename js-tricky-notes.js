/*
|| ইন্টারভিউ প্রশ্ন ||
====================

১. জাভাস্ক্রিপ্ট কী কী ডাটা টাইপের ভেরিয়েবল আছে?

২. জাভাস্ক্রিপ্ট ফাংশন, বা array কি টাইপের জিনিস ? 

৩. জাভাস্ক্রিপ্ট এ array যদি অবজেক্ট হয় তাহলে কিভাবে চেক করবে কোন একটা ভেরিয়েবল একটা array নাকি array না?

৪. এর মধ্যে undefined আর null এর মধ্যে ডিফারেন্স কি। 

৫. double equal (==) আর triple equal (===) এই দুইটার মধ্যে ডিফারেন্স কি। 

৬. বা implicit conversion কি জিনিস একটা কখন হয়। 

৭. এছাড়াও জাভাস্ক্রিপ্ট এ কয়েক ধরনের স্কোপ আছে। এই স্কোপ গুলার মধ্যে ডিফারেন্স কি। কখন কোনটা হয়। 

৮. ব্লক স্কোপ কি জিনিস? let, const কি টাইপের স্কোপ তৈরি করে?

৯. (এডভান্সড) Closure কি জিনিস? এইটা কিভাবে কাজ করে?

১০. Callback function কি জিনিস?

১১. (এডভান্সড) Hoisting কি জিনিস? (গুগলে সার্চ দিয়ে আরো ভালো করে শিখো )

১২. (এডভান্সড) কি ধরণের ভেরিয়েবল reference দিয়ে ফাংশনে পাঠানো হয় আর কোন ধরণের ভেরিয়েবল value হিসেবে পাঠানো হয়। 

============================================================================================================

1. Data Types
------------
 a) Dynamic types: bcz by default we don't need to set variable type, javascript automatically detect the data type by read the value of the variables. 

 b) Why JS is called as dynamic programming language: Bcz of dynamic data types

 c) Primitive data type: Having only one type value or single type value
    i) number, ii) string, iii) boolean, iv) undefined, v) null, vi) symbol
 d) Non-primivive data type: Having two or more type value
    i) object

 e) truethy:
 ---------------- 
    i)true
    ii) more than 0
    iii) any string including value or white space
    iv) array including empty array
    v) object incuding empty object

    
    || anything else that is not falsy will be truthy

 f) falsy: 
 -----------
    i) false
    ii) 0
    iii) empty string
    iv) undefined
    v) null
    vi) NaN

   g) null vs undefined:
      #undefined:
      ------------
      i) variable declared but not asign value
      ii) function without return anything
      iii) writte return keywork but nothing is returned
      iv) parameter that isn't pass
      v) object property that doe'st exist in an object
      vi) accessing array element out of index vrange
      vii) accessing deleted array element
      viii) declare any variable by default value undefined

      #null:
      ------
      i) by default set the value null

      ##diffrence:
      undefined can be found many cases but null will found only once when we will set the value null.

2. Double equal vs Triple equal: 
---------------------------
      1. Doule chk the value only but triple stricly check the type and value

      2. implicit conversion: Double equal convert two diffrent type value and then compare the values is equal or not

   note: Only Primitive type value can be check by double equal or triple equal

3. Scope, Hoisting:
-----------------
      1. bloock scope: Used const & let
      2. Global scopre: used var and declare outside of function or any blockquote

      3. Local scope: inside function, any

      4. Hoisting: any variable declare using var it's scope is called hoisting scope.
      
      5. global licking: If any variable is declared without let or const the variable is by default convert to global scope, it's called global licking

      Note: global scopre can be access from inside block but block scopre variable can't acess from global

      NB: Try to used ass less as posibile global variable

4. Closure, encapsulation, private variable:
-----------------------------
   a) What is closure in jasascript: 
   If we return any function from inside any function it will create a clousure or encapsulation or private reference it's called clousure in javascript. 
   

5. Callback function:

   if we give any function as a parameter another function and call this function inside this function it's called as callback function

6. 


============================
Summary:
-----------

null
undefined

primitive
object
non-primitive
array

double equal vs triple equal
truthy value vs falsy value

pass by reference: object

pass by value: primitive type data

*/