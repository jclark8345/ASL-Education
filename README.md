# ASL-Education
American Sign Language (ASL) recognition algorithm/education system implemented through the use of Leap Motion Controller. The Leap motion Controller is an optical hand tracking module that captures the movements of the user's hands. This type of controller makes interaction with digital systems natural and effortless.

<p align="center">
  <img src="https://github.com/jclark8345/ASL-Education/blob/main/project_images/Screenshot%202021-09-16%20163431.png" width="400" />
  <img src = "https://github.com/jclark8345/ASL-Education/raw/main/project_images/Leap_Motion_logo.svg" width = "400" />
</p>

## Contents

- [Project Introduction](#project-introduction)
- [File Directory](#file-directory)
- [User Interaction](#user-interaction)
- [Data](#data)
- [User Testing](#user-testing)
- [Video Demonstration](#video-demonstration)
- [References](#references)

## Project Introduction

The goal of this project was to establish an interaction between the user, the Leap Motion controller and the javascript program, ultimately building a system that teaches a user the first 10 ASL digits. The system challenged the user to sign an ASL digit; detect whether they are; tell the user whether they are succeeding or not; and determine, after several seconds, whether they have succeeded or failed. Digit detection occurred through the use of the k-nearest neighbors (kNN) algorithm trained on cleaned/normalized data from all students in the class. Principles of human computer interaction, such as object consistency and cognitive psychology, sought to gamify the system to minimize the time while maximizing the education from the ASL system.

## File Directory
    - project_images: 
    - PredictGesture.html: 
    - PredictGesture.js: 
    - Record.html: .html file to faciliate recording of training data
    - Record.js: .js file used to calculate (record)  user labeled training data as tensor to be fed to kNN
    - PrepareToDraw.js: 
    - digit_data.zip: zipped folder of training data for kNN with 10+ instances for each digit
    
## User Interaction

<p align="center">
  <img src="https://github.com/jclark8345/ASL-Education/blob/main/project_images/hand_to_left.jpeg" width="200" />
  <img src="https://github.com/jclark8345/ASL-Education/blob/main/project_images/hand_to_right.jpeg" width="200" /> 
  <img src="https://github.com/jclark8345/ASL-Education/blob/main/project_images/hand_to_up.jpeg" width="200" />
</p>


<p align="center">
  <img src="https://github.com/jclark8345/ASL-Education/blob/main/project_images/hand_to_close_annotated.png" width="200" />
  <img src="https://github.com/jclark8345/ASL-Education/blob/main/project_images/hand_to_down.jpeg" width="200" /> 
  <img src="https://github.com/jclark8345/ASL-Education/blob/main/project_images/hand_to_far_away_annotated.png" width="200" />
</p>

The ASL education system looked to improve user interaction with the system through helpful, informative visuals. The six images above were used to demonstrate to the user proper hand placement above the Leap Motion controller. The users hand to the left, not above the Controller, prompted the first image to remind the user to keep their hand above the Leap Motion Controller

### Performance Visualizations

Two unique performance visualizations were added as functionality to the system to provide a comparison for performance. Given our goal of creating a user system that was able to interact with users regardless of age or language, both visualizations and user statistics were provided to demonstrate performance. 
The first looked to visualize how a users current session performance compared to their previous session performance. The user was displayed the average digit accuracy from both their past and current session and the visualization was shown based off a ratio of these values. The visualization used 5 unique faces, drawn from a medical pain scale chart, to display a comparison of performance. For instance, user who has previously interacted with the system are initially shown a red, crying face. This image visualizes their poor performance, comparatively. When the ratio of these two metrics are close to 1, users are shown shown a yellow face. When users current performance is comparatively larger than past sessions, users are shown a green smile.
 
<p align="center">
  <img src="https://github.com/jclark8345/ASL-Education/blob/main/project_images/face_images/green_face.PNG" width="100" />
  <img src="https://github.com/jclark8345/ASL-Education/blob/main/project_images/face_images/yellow_face.PNG" width="100" /> 
  <img src="https://github.com/jclark8345/ASL-Education/blob/main/project_images/face_images/red_face.PNG" width="100" />
</p>


The second set of visualizations sought to indicate how a users current session performance compared to the performance of users who had previously interacted with the system. Users were initially shown the top three users who have interacted with the system and a blue 'participation' ribbon. Ranking display and the visualization changed based on user performance and users were shown a 1st place, 2nd place, or 3rd place medal, dependent on calculated rankings. 

<p align="center">
  <img src="https://github.com/jclark8345/ASL-Education/blob/main/project_images/scoreboard_images/first.PNG" width="100" />
  <img src="https://github.com/jclark8345/ASL-Education/blob/main/project_images/scoreboard_images/second.PNG" width="100" /> 
  <img src="https://github.com/jclark8345/ASL-Education/blob/main/project_images/scoreboard_images/third.PNG" width="100" />
  <img src="https://github.com/jclark8345/ASL-Education/blob/main/project_images/scoreboard_images/ribbon.png" width="100" />

</p>


## Data

Each training instance was a single 3D tensor which stored all the hand data from a single frame recorded by the Leap Motion Controller. Thus, each tensor contains 120 elements related to the bone postions from one frame of leap data. Each training instance was properly labeled based on which ASL digit the user was signing. The kNN algorithm was applied to data generated by everyone in the class. Thereofore, normalization methods were applied to ensure that all training data lied in the same coordinate system. The output of the kNN was one number as a prediction: which (if any) of the ten ASL digits the user is currently signing.

## User Testing

## Video Demonstration
<a href="https://www.youtube.com/watch?v=0j3Vkf6j6iY" title="Link Title">
  <p align = "center">
  <img src="https://github.com/jclark8345/ASL-Education/blob/main/project_images/youtube_overlay_image.png" width = "600" alt="Alternate Text" /></a>
</p>

## References

    - Lavamagh, S., Luxton-Reiller, A., Wuenscje, B., Plimmer, B. (2017). A systematic review of Virtual Reality in education. *Themes in Science and Technology Education*, 10(2), 85-119.


