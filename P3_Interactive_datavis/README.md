# Project 2: Visualize Qualitative Data
## An Growing Whirlpool of Threatened Avian Species

## Questions
My first project aims to display the extinct birds, but what's gone is gone, we need to pay attention to those still exist, and to protect them. So this project would focus on the Conservation Status of the existing birds.

Revolving around the conservation status, how to reveal the data in multiple dimensions? That is, how to tell a story of the status change over time, how to support comparison among different "threatened" categories, how to geocode each data point and show the relations between "threatened" species and geographical locations, how to display the taxonomy hierarchy of a specific bird, and how to show detailed information for objects just to the good scale. And how to 

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
          2004 — Extinct in the Wild (EW)
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
