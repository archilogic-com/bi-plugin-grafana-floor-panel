# Archilogic Floor Panel plugin

This document provides an overview of the Archilogic plugin for Grafana, including installation and configuration instructions, and an explanation of how to use the plugin in order to better visualize your data.

## Introduction

The Archilogic plugin for Grafana gives users the ability to load floor plans stored in Archilogic within Grafana dashboards, map information from data sources to elements in space, and visualize information on floor plans.

The plugin provides a range of features including the ability to customize visualization styles, interact with the model using touch or mouse controls, and use entities in the floor plan to filter information in other Grafana components. The plugin uses Archilogic’s Floor Plan Engine SDK, which you can find more details about below.

## Requirements

Grafana 8.2.0+

## Installation

Use the grafana-cli tool to install from the command line:

```jsx
grafana-cli plugins install archilogic-floor-panel
```

Navigate to Grafana in your browser and log in. Go to the plugin list, search for Archilogic Floor Panel, and enable the plugin.

Provide floor plan ID and publishable token, or use the default ones for demo:

- Floor plan ID `edd55163-b23b-48f3-a602-ea5a0e65809`
- Publishable token `d5b83363-ddf0-4775-b6a3-0843dcd756ed`

## Configure a datasource

To connect the datasource to the plugin, please ensure you have a compatible datasource set up in Grafana that provides the required data format. The data format should consist of a series of node IDs and corresponding values ranging from 0 to 10. Node IDs must belong to the defined floor plan ID from the Floor Panel plugin.

## Documentation

You can find more information about the Archilogic Floor Plan SDK, including documentation and examples, in the following places:

- [Floor Plan Engine](https://developers.archilogic.com/floor-plan-engine/guide.html)
- [Built with Archilogic](https://www.archilogic.com/resources)
- [Knowledge base](https://help.archilogic.com/knowledge)

## Development

If you are interested in developing and contributing to this project, check out the git repository [here](https://github.com/archilogic-com/bi-plugin-grafana-floor-panel).

## License

Apache License Version 2.0, see LICENSE.
