FROM node:10
ENV PORT 3001
EXPOSE 3001
WORKDIR /scratch
COPY . .
RUN yarn run tsc
CMD ["node", "dist/"]
