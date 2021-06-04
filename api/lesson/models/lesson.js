"use strict";

module.exports = {
  lifecycles: {
    async beforeCreate(data) {
      var level = await strapi.query("level").findOne({ id: data.level });

      if (level && data.level && data.lessonNo) {
        data.key = `${level.levelNo}-${data.lessonNo}`;
      }

      if (data.key) {
        var res = data.key.split("-");
        data.levelNo = res[0];
      }
    },

    async beforeUpdate(params, data) {
      var level = await strapi.query("level").findOne({ id: data.level });

      if (level && data.level && data.lessonNo) {
        data.key = `${level.levelNo}-${data.lessonNo}`;
      }

      if (data.key) {
        var res = data.key.split("-");
        data.levelNo = res[0];
      }
    },
  },
};
