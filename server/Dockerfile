# Use an official Python runtime as a parent image
# This image is based on the popular Alpine Linux project
FROM python:3.6-alpine

# Set the file requirement
ADD requirements.txt ./

ARG http_proxy
ARG https_proxy
ARG no_proxy

RUN export http_proxy=$http_proxy \
  && export https_proxy=$https_proxy \
  && export no_proxy=$no_proxy

# Install any needed packages specified in requirements.txt
RUN pip install -r requirements.txt

 # Set the working directory to /twitter
 COPY ./myapp /myapp
 WORKDIR /myapp/

# Make port 80 available to the world outside this container
EXPOSE 5001

# Run app.py when the container launches
CMD ["python", "rest-server.py"]
