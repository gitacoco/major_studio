# Project 2: Visualize Qualitative Data
## An Growing Whirlpool of Threatened Avian Species

## Questions
My first project aims to display the extinct birds, but what's gone is gone, we need to pay attention to those still exist, and to protect them. So this project would focus on the Conservation Status of the existing birds.

Revolving around the conservation status, how to reveal the data in multiple dimensions? That is, how to tell a story of the status change over time, how to support comparison among different "threatened" categories, how to geocode each data point and show the relations between "threatened" species and geographical locations, how to display the taxonomy hierarchy of a specific bird, and how to show detailed information for objects just to the good scale.

## Design 

### Ideation
![Sketch](./img/sketch.png)

### Prototype

## Datasets
1.1 [The IUCN Red List](https://www.iucnredlist.org)
The IUCN Red List of Threatened Species is the best known worldwide conservation status listing and ranking system. 
1.1.1 Data Points
IUCN lists avian species in different Conservation Status. As of December 2019, IUCN lists 225 critically endangered avian species, 461 endangered avian species, 800 vulnerable avian species. 

1.1.2 Sample Properties 
```CSS
{
  Normal Name: Hawaiian Crow
  Scientific Name: Corvus hawaiiensis
  Category: Extinct in the Wild
  Taxonomy: {
          KINGDOM: Animalia
          PHYLUM: Chordata
          CLASS: Aves
          ORDER: Passeriformes
          FAMILY: Corvidae
          GENUS: Corvus
        }
  Year Last Seen: 2002
  Geographic Range: Polygons (SHP)
  Historical Assessments:{
          2016 — Extinct in the Wild (EW)
          2013 — Extinct in the Wild (EW)
          2012 — Extinct in the Wild (EW)
          2010 — Extinct in the Wild (EW)
          2008 — Extinct in the Wild (EW)
          2004 — Extinct in the Wild (EW)
          2000 — Critically Endangered (CR)
          1996 — Critically Endangered (CR)
          1994 — Critically Endangered (CR)
          1988 — Threatened (T)
        }
  System: Terrestrial
  Habitat Type: Forest, Shrubland, Artificial/Terrestrial
  Threats: {
          Agriculture & aquaculture
          Biological resource use
          Human intrusions & disturbance
          Invasive and other problematic species, genes & diseases
  }
}
```
1.1.3 Data Quality
Very good and complete datasets with a long maintenance history

1.2 [The NMNH Birds Collection Database](https://collections.nmnh.si.edu/search/birds/)
1.1.1 Data Points
The Division of Birds, National Museum of Natural History, Smithsonian Institution, houses and maintains the third largest bird collection in the world with over 625,000 specimens.

1.1.2 Properties

1.1.3 Data Quality
We could use this database to match the candidates in our list: if NMNH has corresponding specimen records, the candidate will be hyperlinked.

## Why Interactive


## Visualization Method



**Oct 13 Sketch**

![Sketch](./img/sketch.JPG)
This is a continuation of [project 1](https://github.com/gitacoco/major_studio_1/tree/master/P1_Quantitative_datavis) that brings appearances of extinct birds for people. 

In this project, I am going to bring the voices of the threatened birds as well as few extinct ones' (I am lucky to find some precious songs of the birds extinct in recent years). When we think of multiple pictures we may combine them in canvas, like [Collage Art](https://en.wikipedia.org/wiki/Collage). And normally, people appreciate a painting by watching rather than listening since there is no sound. But if we associate each bird's picture with its songs, we enable people to make up a whole picture with bird voices and make it as a concerto to be heard.

The data visualization and sonification will meet here for people to generate their **data experience**.

### Prototype

**Oct 20 Prototype**

[![Prototype](./img/Player.jpeg)](https://www.youtube.com/watch?v=2HPtaNh0Wno)

## Implementation Process

![Roadmap](./img/roadmap.png)

## Reference
1. [How Bird Classification Works](http://birding-world.com/bird-classification-works/)
2. [Drag/Resize/Rotate Javascript](https://github.com/nichollascarter/subjx)
3. [How to Generate Waveform Images From Audio Files](https://cloudinary.com/blog/how_to_generate_waveform_images_from_audio_files)
4. [Generating Waveforms using the WordPress REST API](https://www.cedaro.com/blog/generating-waveforms-using-the-wordpress-rest-api/)
5. [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
6. [Create a waveform of the full track with Web Audio API](https://stackoverflow.com/questions/22073716/create-a-waveform-of-the-full-track-with-web-audio-api)