/*
 * @Descripttion: 
 * @version: 
 * @Author: windowdotonload
 */
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = `hi, egg   ${ctx.query.a}`;
  }

  async postreq() {
    const { ctx } = this
    console.log(ctx.request)
    // ctx.body = `post data    ${ctx.request.body.a}`
    ctx.body = {
      data: '123',
      msg: "success"
    }
  }
}

module.exports = HomeController;
