# 基础镜像
FROM nginx:1.26.1
# 添加元数据
LABEL authors="p7i"
# 将dist目录下的文件复制到容器中的/usr/share/nginx/html目录下
COPY dist/ /usr/share/nginx/html/
# 将证书文件内容复制到/usr/local/nginx/文件夹下
COPY src/ssl/ /usr/local/nginx/cert/
# 设置时区
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
RUN echo 'Asia/Shanghai' >/etc/timezone
# 删除配置
RUN rm /etc/nginx/nginx.conf
# 增加nginx配置
COPY nginx/nginx.conf /etc/nginx/nginx.conf
EXPOSE 443
# 使用Nginx运行Vue应用
CMD ["nginx", "-g", "daemon off;"]
# docker build -t ihome-front:1.0.1 .
# && docker run -d -p 127.0.0.1:80:80 -v /D/Datas/docker/nginx/log:/var/log/nginx --name i-Home-font ihome-front:1.0.1