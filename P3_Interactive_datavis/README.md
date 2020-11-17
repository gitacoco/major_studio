# Project 2: Visualize Qualitative Data
## An Growing Whirlpool of Threatened Avian Species

## Questions
My first project aims to display the extinct birds, but what's gone is gone, we need to pay attention to those still exist, and to protect them. So this project would focus on the Conservation Status of the existing birds.

Revolving around the conservation status, how to reveal the data in multiple dimensions? That is, how to tell a story of the status change over time, how to support comparison among different "threatened" categories, how to geocode each data point and show the relations between "threatened" species and geographical locations, how to display the taxonomy hierarchy of a specific bird, and how to show detailed information for objects just to the good scale. And how to integrate all these tasks into a consistent interface.

## Design 

### Ideation
![Sketch](./img/sketch.png)

### Prototype

## Datasets
1. [The IUCN Red List](https://www.iucnredlist.org)
The IUCN Red List of Threatened Species is the best known worldwide conservation status listing and ranking system. 

- Data Points
IUCN lists avian species in different Conservation Status. As of December 2019, IUCN lists 225 critically endangered avian species, 461 endangered avian species, 800 vulnerable avian species. 

- Sample Properties 
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
- Data Quality
Very good and complete datasets with a long maintenance history.

2. [The NMNH Birds Collection Database](https://collections.nmnh.si.edu/search/birds/)
- Data Points
The Division of Birds, National Museum of Natural History, Smithsonian Institution, houses and maintains the third largest bird collection in the world with over 625,000 specimens.

- Properties
```CSS
Specimen/Lot
{
  Catalog Number:	USNM 177995
  Normal Name: Hawaiian Crow
  Scientific Name: Corvus hawaiiensis
  Sex: Male
  Stage: Adult
  Date Collected:	12 Jun 1899
  Collector(s):	Henshaw, H. W.
  EZID:	http://n2t.net/ark:/65665/347586eff-5a1d-4437-8a91-26de3576fdca
}
```

- Data Quality
  - Not every bird could be matched in this database. 
  - Most of the specimens are not uploaded to this online database, meaning many recordings are without a pic.

## Why Interactive
> Interactivity is crucial for building vis tools that handle complex- ity. When datasets are large enough, the limitations of both people and displays preclude just showing everything at once; interac- tion where user actions cause the view to change is the way for- ward. Moreover, a single static view can show only one aspect of a dataset. For some combinations of simple datasets and tasks, the user may only need to see a single visual encoding. In con- trast, an interactively changing display supports many possible queries.

## Visualization Method
1. Spatio-temporal data visualization
2. Graph Visualization
3. Unit Visualization

## Reference
1. D. Park, S. M. Drucker, R. Fernandez and N. Elmqvist, "Atom: A Grammar for Unit Visualizations," in IEEE Transactions on Visualization and Computer Graphics, vol. 24, no. 12, pp. 3032-3043, 1 Dec. 2018, doi: 10.1109/TVCG.2017.2785807.
2. Heer, Jeffrey, and George Robertson. "Animated transitions in statistical data graphics." IEEE transactions on visualization and computer graphics 13.6 (2007): 1240-1247.