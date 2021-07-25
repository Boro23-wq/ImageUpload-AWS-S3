## Upload an image to AWS S3 using Localstack.
Upload image files to AWS S3 using Localstack development environment. The project is built using Nest.js + Typescript.

### Installation
Run the following commands to install and run the Nest server.
```bash
$ git clone https://github.com/Boro23-wq/ImageUpload-AWS-S3.git
$ yarn
$ yarn start:dev
```
Since we are using Localstack for the development environment, you'd also require  Localstack to be downloaded before you can run the application.

### Quick steps to install localstack on your system

- Download the Docker Desktop for your system. You can find the downloadable files [here.](https://www.docker.com/products/docker-desktop)

- Pull the localstack docker image from Docker Hub. You can find the image [here.](https://hub.docker.com/r/localstack/localstack)

Once you have localstack installed on your system you can go ahead and run the following command to start the localstack server:

```bash
# (MacOS)
DATA_DIR=/tmp/localstack/data localstack infra start --docker

# (Windows)
"C:\Users${YOUR_WINDOWS_USERNAME_HERE}\localstack\data":"/tmp/localstack/data" -e "DATA_DIR=/tmp/localstack/data" -p 4566:4566 localstack/localstack
```