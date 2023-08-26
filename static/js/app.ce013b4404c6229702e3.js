webpackJsonp(
  [1],
  {
    "8Fez": function (e, t) {},
    NHnr: function (e, t, i) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var s = i("7+uW"),
        a = [
          {
            id: 1,
            title: "Nursery Top and Middle class Number lesson By Tr AYAZIKA ROBINAH",
            thumbnail:
              "download (11).jpg",
            youtubeURL: "https://www.youtube.com/embed/t0PaWy6OkNM",
            creator: "Fresh Teacher",
            likes: 782,
            views: 2830,
            duration: "3 days ago",
          },
          {
            id: 2,
            title: "Dope Tech: Camera Robots!",
            thumbnail:
              "https://i.ytimg.com/vi/UIwdCN4dV6w/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDhlan32jHSvicGZezDFPjAOdXGUA",
            youtubeURL: "https://www.youtube.com/embed/UIwdCN4dV6w",
            creator: "Fresh Teacher",
            likes: 0,
            views: 0,
            duration: "2 days ago",
          },
          {
            id: 3,
            title:
              "MY NANNY DRAMA | I'VE HAD 4 WITHIN 6 MONTHS | HOUSE HELP DIARIES",
            thumbnail: "http://img.youtube.com/vi/KPVfCZST84U/0.jpg",
            youtubeURL: "https://www.youtube.com/embed/KPVfCZST84U",
            creator: "SiSi Yemmie",
            likes: 0,
            views: 0,
            duration: "3 weeks ago",
          },
          {
            id: 4,
            title: "iPhone 8 Plus vs iPhone 7 Plus Full Comparison",
            thumbnail: "http://img.youtube.com/vi/am3i3bPMWXM/0.jpg",
            youtubeURL: "https://www.youtube.com/embed/am3i3bPMWXM",
            creator: "Fresh Teacher",
            likes: 0,
            views: 0,
            duration: "1 week ago",
          },
          {
            id: 5,
            title: "The Apple Ecosystem: Explained!",
            thumbnail:
              "https://i.ytimg.com/vi/KB4_WIPE7vo/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCCxXm7aoPShOwON74nhMlGYMUkHw",
            youtubeURL: "https://www.youtube.com/embed/KB4_WIPE7vo",
            creator: "Fresh Teacher",
            likes: 0,
            views: 0,
            duration: "3 weeks ago",
          },
          {
            id: 6,
            title: "Talking Tech with Neil deGrasse Tyson!",
            thumbnail:
              "https://i.ytimg.com/vi/pqQrL1K0Z5g/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLA5hTiwkz4Tr1w1hSMhPlwtmQeyYw",
            youtubeURL: "https://www.youtube.com/embed/pqQrL1K0Z5g",
            creator: "Fresh Teacher",
            likes: 0,
            views: 0,
            duration: "3 days ago",
          },
        ],
        o = {
          name: "VideoPlayer",
          data: function () {
            return { videos: a, activeVideo: a[0] };
          },
          methods: {
            chooseVideo: function (e) {
              (this.activeVideo = e), (e.views += 1);
            },
            addLike: function () {
              this.activeVideo.likes += 1;
            },
          },
        },
        n = {
          render: function () {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t;
            return i("div", { staticClass: "video-player" }, [
              i("div", { staticClass: "video-container" }, [
                i("iframe", {
                  attrs: {
                    width: "840",
                    height: "360",
                    src: this.activeVideo.youtubeURL,
                    frameborder: "0",
                    allow: "autoplay; encrypted-media",
                    allowfullscreen: "",
                  },
                }),
                e._v(" "),
                i("h3", [e._v(e._s(this.activeVideo.title))]),
                e._v(" "),
                i("div", { staticClass: "row" }, [
                  i("p", [e._v(" " + e._s(this.activeVideo.views) + " Views")]),
                  e._v(" "),
                  i("p", [
                    e._v(" " + e._s(this.activeVideo.likes) + " "),
                    i("button", { on: { click: e.addLike } }, [e._v("Likes")]),
                  ]),
                ]),
              ]),
              e._v(" "),
              i(
                "div",
                { staticClass: "video-list" },
                e._l(e.videos, function (t) {
                  return i(
                    "div",
                    {
                      key: t.id,
                      staticClass: "thumbnail",
                      on: {
                        click: function (i) {
                          e.chooseVideo(t);
                        },
                      },
                    },
                    [
                      i("div", { staticClass: "thumbnail-img" }, [
                        i("img", { attrs: { src: t.thumbnail, alt: "video" } }),
                      ]),
                      e._v(" "),
                      i("div", { staticClass: "thumbnail-info" }, [
                        i("h3", [e._v(e._s(t.title))]),
                        e._v(" "),
                        i("p", [e._v(e._s(t.creator))]),
                        e._v(" "),
                        i("p", { staticClass: "thumbnail-views" }, [
                          e._v(" " + e._s(t.views) + " Views"),
                        ]),
                        e._v(" "),
                        i("p", { staticClass: "thumbnail-views" }, [
                          e._v(" " + e._s(t.duration)),
                        ]),
                      ]),
                    ]
                  );
                })
              ),
            ]);
          },
          staticRenderFns: [],
        };
      var r = {
          name: "App",
          components: {
            VideoPlayer: i("VU/8")(
              o,
              n,
              !1,
              function (e) {
                i("QhRI");
              },
              "data-v-1164fe95",
              null
            ).exports,
          },
        },
        l = {
          render: function () {
            var e = this.$createElement,
              t = this._self._c || e;
            return t(
              "div",
              { attrs: { id: "app" } },
              [this._m(0), this._v(" "), t("VideoPlayer")],
              1
            );
          },
          staticRenderFns: [
            function () {
              var e = this.$createElement,
                t = this._self._c || e;
              return t("div", { staticClass: "banner" }, [
                t("img", {
                  staticStyle: { margin: "14px", cursor: "pointer" },
                  attrs: {
                    src: "https://cdn-images-1.medium.com/max/880/1*tidWIoAQ-i2SiKTNh9WJSw.png",
                    width: "100px",
                    alt: "logo",
                  },
                }),
              ]);
            },
          ],
        };
      var u = i("VU/8")(
        r,
        l,
        !1,
        function (e) {
          i("8Fez");
        },
        null,
        null
      ).exports;
      (s.a.config.productionTip = !1),
        new s.a({ el: "#app", components: { App: u }, template: "<App/>" });
    },
    QhRI: function (e, t) {},
  },
  ["NHnr"]
);
//# sourceMappingURL=app.ce013b4404c6229702e3.js.map
