import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; //#fileUploader upload the file through the HTTPClient
import { HttpClient, HttpEventType } from '@angular/common/http';       //#fileUploader

@Component({
  selector: 'app-iuploader',
  templateUrl: './iuploader.component.html',
  styleUrls: ['./iuploader.component.scss']
})
export class IuploaderComponent implements OnInit {

  //#fileUploader
  constructor(private http: HttpClient) {}

  ngOnInit() {
  }
  
  //#fileUploader files to store, initially nothing in it so null
  selectedFile: File = null;

  //#fileUploader
  onFileSelected(event) {
    console.log(event);
    this.selectedFile = <File>event.target.files[0];  //"target"&"files" are the default property for the uploaded files
  }
  
  //#fileUploader button function
  onUpload(){
    //POST request, the url which should be sent is the url of this Filebase cloud function which i creted
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);   //Append=add some field(image file itself, value of this selected file, get name property)
    this.http.post('YOUR_FIREBASE_FUNCTION', fd, {
      reportProgress: true,
      observe: 'events'
    })
      // .subscribe(res => {
      //   console.log(res);
      // }); 
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          console.log('Upload Progress: ' + Math.round(event.loaded / event.total * 100) + '%'); 
        } else if (event.type === HttpEventType.Response) {
          console.log(event);
        }
      }); 
  }

}
