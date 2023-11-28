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
        ],
        o = {
          name: "VideoPlayer",
          data: function () {
            return {
              videos: a,
              activeVideo: a[0],
              comments: [
                { id: 1, user: "JohnDoe", content: "Great video!" },
                { id: 2, user: "JaneSmith", content: "Awesome content!" },
              ],
              newCommentUser: "",
              newCommentContent: "",
            };
          },
          methods: {
            chooseVideo: function (e) {
              (this.activeVideo = e), (e.views += 1);
            },
            addLike: function () {
              this.activeVideo.likes += 1;
            },
            addComment: function (user, content) {
              const newComment = { id: this.comments.length + 1, user, content };
              this.comments.push(newComment);
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