FROM ruby:3.1.1-alpine

RUN apk add --update --no-cache \
      gcc \
      libc-dev \
      libgcrypt-dev \
      make \
      tzdata

ARG MONGODB_URI
ENV MONGODB_URI=$MONGODB_URI
ENV BUNDLER_VERSION 2.3.7
ENV RAILS_ENV production
RUN gem install bundler -v $BUNDLER_VERSION

WORKDIR /usr/src/app

COPY Gemfile Gemfile.lock ./

RUN bundle config build.nokogiri --use-system-libraries
RUN bundle install --without development test

COPY . .

EXPOSE 3000

CMD ["rake", "wordle:setup"]
