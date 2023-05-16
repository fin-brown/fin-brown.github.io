---
slug: cnn-visualisations
title: Methods for Visualising Convolutional Neural Networks
date: 2020-05-13
excerpt: 'A look at Class Activation Heatmaps, Occlusion Sensitivity Maps and Guided Back-propagation.'
tags: [Data Science, Code]
owner: false
image: true
---

CNNs are a blackbox approach to prediction whose decisions processes are difficult to understand; visualisation provides researchers with important model diagnostic insight not available through error-testing alone. Visualisations can show which features or regions of an image are being used in the decision making process of a network, enabling researchers to ensure a network is not incorrectly learning classes, for example distinguishing dogs and wolves by the presence of snow in the background or the US army's fabled attempt to detect camouflaged [tanks](https://google.com).

Not only can visualisations be used for diagnostics, they can be used as the basis for object-localisation and labelling. Object localisation has important practical uses: medical imaging software uses object-localisation and pixel labelling to highlight areas of images, for example potential lesions, that might be relevant to researchers. Whilst the methods here will focus on diagnostic visualisation, the underlying functionality could be extended to provide object-localisation. 

As there are a variety of different types of visualisation available for NNs, which particular method is most appropriate  is often dictated by the domain or purpose of the model. For the three methods demonstrated in this project, their function is to display which areas of input images are discriminative in prediction, helping researchers understand and explain the model's decision making process. Here, input areas may be defined on a pixel-level or a wider region represented as a heatmap. Whilst the visualisations considered in this project are input-based, other methods exist that are feature-based (feature activation maps), display convolutional filters or maximise output by regularized optimisation.

<a href="https://github.com/fin-brown/misc-msc-projects/tree/master/CNNVisualisations" target="_blank">See the code and read the full report here.</a>