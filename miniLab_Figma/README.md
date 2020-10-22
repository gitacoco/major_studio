# Prototyping and Interactions in Figma 

## What is Figma and Why I like it (Compared to Sketch)

> Figma is a could-based collaborative interface design tool that compatible with any operating system. 

And the most important, it’s free for individual designers. These are my favorite 6 features of Figma:

1. **Version Control**

In programming, we use Git to records changes to a file over time so that we can recall specific versions later.  And traditionally, for UI design software we would manage our file like this way: 

<img src="./version_control.png" width="50%" height="50%">

But in Figma, that would be a different story. And you never need to struggle with losing and juggling files. 

2. **High-Performance Computing**

Usually, when we have too many (actually it’s not too many) layers or elementals, the software tens to stutter or get lags. They would be too slow and don’t response in time. But Figma is cloud-based. It is a SaaS platform, like Gmail, Google Docs. So the computing process is in the cloud, and have a high performance.

<img src="./Speed.gif" width="40%" height="40%">

4. **High-efficiency Editing**

Figma has lots of features to support Bulk Manipulation (such as change color, rename) and Quick Select. Take change color as an Example. In sketch, especially in nested layers, If we want to change color of a specific layer, we need to click click again and again to enter the target layer. But in Figma, this would not happen. 

5. **Compatibility**

Windows, Mac OS & Linux, as long as you can run web browsers, you can run Figma. And they also have a client application that supports offline editing. And there even is a third-party application in iPadOS called [Figurative](https://figurative.design), supporting Apple Pencil and touch gestures. 
I once experienced it when I was away from home.

<img src="./compatibility.png" width="35%" height="35%">

6. **An Accelerator for your Design**: UI Kits, Design Systems, Wireframes and Plugins in Community

Sometimes, you need to deliver a hi-fi prototype rapidly for your client. Even if you are still in the early stage of the project. Many clients they just have no clear idea of the outcome, and their needs. You need to show something first. So the case here is that you could make it with the help of UI kits in Figma community. For example, this is a firefighting situational awareness system for Xiamen City in China, this is for large-screen environment.  There was a day my client had a brainwave that they want an edition for cellphone. This is not a formal requirement, so I used UI kits in Figma to build a hi-fi mockup in 4 hours. But this is my only project I was using UI kit. (I never used them for Major Studio Projects!)

7. **Besides Above**

Figma has tons of very useful features such as **Auto Layout**, **Components(Equivalent to **Symbol** in Sketch)**, **Design System** and **Collaboration and Share and Present**. If you are still interested in these features, you can visit [Courses Resources Section](https://www.figma.com/resources/courses/).

## Prototyping with Figma

In Figma, you can design, prototype and present, all in the same tool. You prototype while you design, and design while you prototype. I summarized three main steps for prototyping with Figma:

### Step 1: Connect Framers 

### Step 2: Set the Interaction (Transformation Trigger)

Most commonly used(for me):
- **On Click**
    - Case 1: Bird Project 2

- **While Hovering**
    - Case 2: Bird Project 2 (Bird Selection)
    - Case 3: Reading Presentation (Charts Comparison)

Low frequency:
- **After Delay**
    - Case 4: Bird Project 2 (Environment Detection)
    - Case 5: Xiamen Vis (A New Fire Case)
- **Drag**
    - Case 6: Xiamen Vis Mobile Client (Page)

### Step 3: Set the Animation (Transition)

Most commonly used(for me):
- **Dissolve**
- **Instant**
- **Smart Animation**
    - Case 7: Bird Project 2 (Control Bar)
    - The same layer name
    - Location in the layer hierarchy
    - Check by hovering
    - Tip: use it with restraint

### Sometimes: Overflow Behavior for Frames

- Frames in Figma

> If you've used design tools before, you'll be familiar with artboards. Like artboards, frames allow you to choose an area of the canvas to create your designs in. Unlike traditional artboards, you can also nest frames within other frames. This allows to create more complex design that work together.

- A Frame as a contrainer
    - Case 8: Bird Project 2 (Bird List)
    - Clip content
- Affect child objects
    - Move
    - Resize
    - Case 9: Bird Project 2 (SI Logo)
    
- **Scrolling** VS **Drag**
    - cost of making
    - the nuance of effect
        - Drag: magnetically forced
        - Scrolling: seamless
    - Case 9: Xiamen Vis Mobile Client (Components)
    - Asset: [si-logo](./si-logo.svg)

### working strategy

- Hide defect when sharing
- Choose the most handy tool
    - Case 10: Bird Project 2 ([Add sound files to prototype](https://www.youtube.com/watch?v=4sKflYAjEyA&feature=youtu.be))