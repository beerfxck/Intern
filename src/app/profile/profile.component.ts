import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileData: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Make HTTP request to get profile data
    this.http.get('http://103.13.31.37:17444/api/my/profile')
      .subscribe((data: any) => {
        this.profileData = this.convertNumbers(data);
      });
  }

  private convertNumbers(data: any): any {
    // Convert followers and following numbers
    if (data.followers >= 1000) {
      data.followers = (data.followers / 1000).toFixed(1) + 'K';
    }

    if (data.following >= 1000000) {
      data.following = (data.following / 1000000000).toFixed(1) + 'B';
    }

    return data;
  }
}
