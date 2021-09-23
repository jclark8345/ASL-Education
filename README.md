# ASL-Education
American Sign Language (ASL) recognition algorithm/education system implemented through the use of Leap Motion Controller. The Leap motion Controller is an optical hand tracking module that captures the movements of the user's hands. This type of controller makes interaction with digital systems natural and effortless.

<p align="center">
  <img src="https://github.com/jclark8345/ASL-Education/blob/main/project_images/Screenshot%202021-09-16%20163431.png" width="500" />
</p>

## Contents

- [Project Introduction](#project-introduction)
- [File Directory](#file-directory)
- [User Interaction](#user-interaction)
- [Data](#data)
- [Results](#results)
- [References](#references)

## Project Introduction

The goal of this project was to establish an interaction between the user, the Leap Motion controller and the javascript program, ultimately building a system that teaches a user the first 10 ASL digits. The system challenged the user to sign an ASL digit; detect whether they are; tell the user whether they are succeeding or not; and determine, after several seconds, whether they have succeeded or failed. Digit detection occurred through the use of the k-nearest neighbors (kNN) algorithm trained on cleaned/normalized data from all students in the class. Principles of human computer interaction, such as object consistency and cognitive psychology, sought to gamify the system to minimize the time while maximizing the education from the ASL system.

## File Directory
    - project_images: 
    - PredictGesture.html: 
    - PredictGesture.js: 
    - Record.html: 
    - Record.js: 
    - PrepareToDraw.js:
    - digit_data.zip: zipped folder of training data for kNN with 10+ instances for each digit
## User Interaction

<p float="left">
  <img src="https://github.com/jclark8345/ASL-Education/blob/main/project_images/hand_to_left.jpeg" width="200" />
  <img src="https://github.com/jclark8345/ASL-Education/blob/main/project_images/hand_to_right.jpeg" width="200" /> 
  <img src="https://github.com/jclark8345/ASL-Education/blob/main/project_images/hand_to_up.jpeg" width="200" />
</p>


<p float="left">
  <img src="https://github.com/jclark8345/ASL-Education/blob/main/project_images/hand_to_close_annotated.png" width="200" />
  <img src="https://github.com/jclark8345/ASL-Education/blob/main/project_images/hand_to_down.jpeg" width="200" /> 
  <img src="https://github.com/jclark8345/ASL-Education/blob/main/project_images/hand_to_far_away_annotated.png" width="200" />
</p>

### Perfromance Visualizations

Two unique performance visualizations were added as functionality to the system to provide a comparison for performance. Given our goal of creating a user system that was able to interact with users regardless of age or language, both visualizations and user statistics were provided to demonstrate performance. 
The first looked to visualize how a users current session performance compared to their previous session performance. The user was displayed the average digit accuracy from both their past and current session and the visualization was shown based off a ratio of these values. The visualization used 5 unique faces, drawn from a medical pain scale chart, to display a comparison of performance. For instance, user who has previously interacted with the system are initially shown a red, crying face. This image visualizes their poor performance, comparatively. When the ratio of these two metrics are close to 1, users are shown shown a yellow face. When users current performance is comparatively larger than past sessions, users are shown a green smile.
The second set of visualizations sought to indicate how a users current session performance compared to the performance of users who had previously interacted with the system. Users were initially shown the top three users who have interacted with the system and a blue 'participation' ribbon. Ranking display and the visualization changed based on user performance and users were shown a 1st place, 2nd place, or 3rd place medal, dependent on calculated rankings. 

## Data

## Results

## References

    - Lavamagh, S., Luxton-Reiller, A., Wuenscje, B., Plimmer, B. (2017). A systematic review of Virtual Reality in education. *Themes in Science and Technology Education*, 10(2), 85-119.


