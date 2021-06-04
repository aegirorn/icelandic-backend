"use strict";

module.exports = {
  lifecycles: {
    async beforeCreate(data) {
      var lesson = await strapi.query("lesson").findOne({ id: data.lesson });

      if (lesson && data.lesson && data.pageNo) {
        data.slug = `${lesson.key}-${data.pageNo}`;
      }

      if (data.slug) {
        var res = data.slug.split("-");
        data.levelNo = res[0];
        data.lessonNo = res[1];
      }
    },
    async beforeUpdate(params, data) {
      var lesson = await strapi.query("lesson").findOne({ id: data.lesson });

      if (lesson && data.lesson && data.pageNo) {
        data.slug = `${lesson.key}-${data.pageNo}`;
      }

      if (data.slug) {
        var res = data.slug.split("-");
        data.levelNo = res[0];
        data.lessonNo = res[1];
      }
    },
  },
};
