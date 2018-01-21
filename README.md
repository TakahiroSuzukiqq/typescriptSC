# Description      
This app was originally a typescript "Todo List"-ish app using angular animation.     
Followed the wonderful [Udemy](https://www.udemy.com) tutorial of "Learn Angular 5 from Scratch" by the instruction from [Gary Simon](https://www.udemy.com/user/garysimon2/).       
Later on, having added other page and functions, such as displaying Live Cryptocurrency price using Crypto compare API.    
              
<img src="https://image.ibb.co/cd8K4G/Screen_Shot_2018_01_21_at_16_52_08.png" alt="Screen_Shot_2018_01_21_at_16_52_08" border="0">        
        
<img src="https://image.ibb.co/gQKLBw/Screen_Shot_2018_01_21_at_16_48_51.png" alt="Screen_Shot_2018_01_21_at_16_48_51" border="0">    
    
<img src="https://image.ibb.co/m1hU4G/Screen_Shot_2018_01_21_at_16_48_21.png" alt="Screen_Shot_2018_01_21_at_16_48_21" border="0">     
     
             
# Demo    
Used Github to deploy the project at this time. Visit [here](https://takahirosuzukiqq.github.io/typescript-pf-tt/) to play around.    
You can add items by clicking add button on the "home" page and can remove each item by clicking each box,      
and your activity is reflected to the "about" page as well.         
      
        
# Note  
To deploy the angular project to the github page, simply run below command.    

````    
[$ npm install -g angular-cli-ghpages ]    
 $ ng build --prod --base-href="https://YOURGITHUBUSERNAME.github.io/YOURGITHUBREPONAME/"         
 $ angular-cli-ghpages      
````            
  
You don't have to command `--prod` when deploying it.      
Before commnd I would recommend you to check the meaning of it.          
And I don't take any responsibility regarding any cost or damage caused by trying this project.       
            
              
# Ref.    
[Data binding NgModel ref(Japanese)](https://qiita.com/shin_v1/items/c96382ed00da0c3ae13f)         
   
[ngFor ref(Japanese)](http://www.buildinsider.net/web/angulartips/026)       
   
[Library: @angular/animations](https://www.npmjs.com/package/@angular/animations)    

[Github deployment ref.(Japanese)](https://qiita.com/Yuki_Yamashina/items/5d8208c450195b65344c)         

[Angular 2 Tutorial (2016) - HTTP (GET and POST to RESTful Service) BY Maximilian Schwarzmüller - JAN 24, 2016](https://www.youtube.com/watch?v=L7xPwhwbcHE&t=1037s)   
    
[Angular CryptoCurrency Tutorial - Display Exchange Data with an API BY GARY SIMON - SEP 27, 2017](https://coursetro.com/posts/code/91/Angular-CryptoCurrency-Tutorial---Display-Exchange-Data-with-an-API)   
  
[JSON Test](http://www.jsontest.com)    
  
[Crypto Compare API](https://www.cryptocompare.com/api/)    
    
       
# Error  
[The "@angular/compiler-cli" package was not properly installed.(ref 1)](https://stackoverflow.com/questions/42925690/angular2-cli-error-angular-compiler-cli-package-was-not-properly-installed)     
      
[The "@angular/compiler-cli" package was not properly installed.(ref 2)](https://github.com/angular/angular-cli/issues/7503)      
        
[Angular HTTP request header](https://stackoverflow.com/questions/43205570/angular2-http-requestoptions-headers)   
   
      

  