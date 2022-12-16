# rmp-webos

A demo app for using [Radiant Media Player](https://www.radiantmediaplayer.com) in a webOS TV app (LG smart TV)

## Usage

You can use Radiant Media Player to build media-oriented LG Smart TV applications.
The player is equipped with various optimisations, notably file:// protocol support, to work in the following environments:

- Web applications for LG smart TV built for webO3 5+
To get started with your first webOS TV Application [follow that guide](https://webostv.developer.lge.com/develop/getting-started).

For a list of supported features [see our documentation](https://www.radiantmediaplayer.com/docs/latest/lg-smart-tv.html#supported-features).

## Demo app structure

We use the [Hosted Web App](https://webostv.developer.lge.com/develop/getting-started/web-app-types) approach to build this demo app for webOS.

Our live demo app can [be found here](https://www.radiantmediaplayer.com/rmp-webos/) and is presented here in the webapp folder.

Players displayed in our demo app use our dedicated TV player layout for a better fullscreen experience on large displays.

Our demo holds a basic appinfo.json file that is typical of LG TV app. This demo app can be packaged and deploy on an actual LG TV for testing using the [ares-* commmands](https://webostv.developer.lge.com/develop/tools/cli-introduction).

## Support notes

- We support streaming to LG TVs in MPEG-DASH or CMAF HLS (HLS in MPEG-TS format is not supported).
- According to our tetsing, AV1 support can be clunky on older webOS versions (even if they advertise support for it). AVC, VP9 or HEVC should be preferred if you wish to support older versions of webOS.
- Google IMA (video ads) is not currently supported, please use our rmp-vast parser to display video ads on LG Smart TV.
- Make sure to test your app on an actual LG TV - the LG TV emulator provided in the webOS SDK may not support all media features.

## Issues

Issues for this demo app should be submitted in this GitHub page. We will do our best to review them. If you are a Radiant Media Player customer and need support with our player please [open a ticket here](https://www.radiantmediaplayer.com/technical-support.html).

## License for rmp-webos

rmp-webos is released under MIT.

## License for Radiant Media Player

Radiant Media Player is a commercial HTML5 media player, not covered by the above MIT license.

Radiant Media Player license can be found here: [https://www.radiantmediaplayer.com/terms-of-service.html](https://www.radiantmediaplayer.com/terms-of-service.html).

You may request a free trial for Radiant Media Player at: [https://www.radiantmediaplayer.com/free-trial.html](https://www.radiantmediaplayer.com/free-trial.html).
