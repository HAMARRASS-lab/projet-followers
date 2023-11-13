
import { Component, OnInit, } from '@angular/core';
import { PostService } from '../services/post.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';


@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[] = [];
  status = true
  post = {
    id: 0,
    title: '',
    body: '',
    userId: 0
  };
  constructor(private postService: PostService) {

  }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postService.getAll()
      .subscribe((posts: any) => this.posts = posts, error=> {
        alert('erreur inattendue')
        console.log(error)
      });
  }
  createPost() {
    this.postService.create(this.post)
      .subscribe((newPosts: any) => {
        // Handle the data here
        this.post.id = newPosts.id;
        this.posts.unshift(this.post);
        this.post = {
          id: 0,
          title: '',
          body: '',
          userId: 0
        } 

      },
      (error: AppError) => {
        if (error instanceof BadInput) {
          alert('merci de vérifié vos informations');
        } else {
          alert('Erreur inattendue');
          console.log(error);
        }
      }
      );

  }
  editPost(post: any) {
    this.post = post;
    this.status = false;
  }

  updatePost() {
    this.postService.update(this.post)
      .subscribe(
        () => {
          this.post = {
            id: 0,
            title: '',
            body: '',
            userId: 0
          }
          this.status = true
        });
  }
  deletePost(post: any) {
    this.postService.delete(post)
      .subscribe(
        () => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        },
        (error: AppError) => {
          if (error instanceof NotFoundError) {
            alert('Ce post déjà supprimé !');
          } else {
            alert('Erreur inattendue');
            console.log(error);
          }
        }
      );
  }

}
